use hpke::HpkePublicKey;

use super::treesyncable::{TreeSyncLeaf, TreeSyncable, TreeSyncableMut};

use crate::{
    binary_tree::NodeIndex,
    ciphersuite::signable::SignedStruct,
    extensions::{ExtensionType::ParentHash, ParentHashExtension},
    key_packages::KeyPackage,
    prelude::KeyPackagePayload,
};

pub(crate) struct ParentNode {
    public_key: HpkePublicKey,
    unmerged_leaves: Vec<NodeIndex>,
    parent_hash: Vec<u8>,
    tree_hash: Vec<u8>,
}

pub(crate) struct LeafNode {
    // For caching the tree hash of the leaf node.
    tree_hash: Vec<u8>,
    key_package: KeyPackage,
}

impl SignedStruct<KeyPackagePayload> for LeafNode {
    fn from_payload(payload: KeyPackagePayload, signature: crate::ciphersuite::Signature) -> Self {
        let key_package = KeyPackage::from_payload(payload, signature);
        Self {
            tree_hash: vec![],
            key_package,
        }
    }
}

impl TreeSyncable for LeafNode {
    fn node_content(&self) -> &[u8] {
        &self.key_package.hpke_init_key().as_slice()
    }

    fn unmerged_leaves(&self) -> Result<&[NodeIndex], Self::TreeSyncNodeError> {
        Err(Self::TreeSyncableError::NodeTypeError)
    }

    fn parent_hash(&self) -> &[u8] {
        self.key_package
            .extension_with_type(ParentHash)
            // We can unwrap here, because leaf nodes can only be created
            // from key packages that contain an parent hash extension.
            .unwrap()
            .to_parent_hash_extension()
            // We can unwrap here, because we just checked, that the type of
            // the extension is `ParentHash`.
            .unwrap()
            .parent_hash()
    }

    fn tree_hash(&self) -> &[u8] {
        &self.tree_hash
    }

    fn verify(&self) -> Result<(), Self::TreeSyncNodeError> {
        self.key_package
            .verify()
            .map_err(|_| Self::TreeSyncableError::NodeVerificationError)
    }

    type TreeSyncableError = MlsNodeError;

    type TreeSyncableMut = LeafNodeMut;
}

pub(crate) struct LeafNodeMut {
    // For caching the tree hash of the leaf node.
    tree_hash: Vec<u8>,
    key_package: KeyPackagePayload,
}

impl TreeSyncableMut<MlsNodeError> for KeyPackagePayload {
    fn set_tree_hash(&mut self, tree_hash: Vec<u8>) {
        self.tree_hash = tree_hash
    }

    fn clear_unmerged_leaves(&mut self) -> Result<(), Self::TreeSyncableError> {
        Err(Self::TreeSyncableError::NodeTypeError)
    }

    fn add_unmerged_leaf(&mut self, _node_index: NodeIndex) -> Result<(), Self::TreeSyncableError> {
        Err(Self::TreeSyncableError::NodeTypeError)
    }

    fn set_parent_hash(&mut self, parent_hash: Vec<u8>) {
        let parent_hash_extension = ParentHashExtension::new(&parent_hash);
        self.key_package
            .add_extension(Box::new(parent_hash_extension));
    }
}

impl TreeSyncLeaf for LeafNode {
    type UnverifiedLeaf = LeafNodeMut;

    type UnsignedLeaf = LeafNodeMut;

    type SignedLeaf = LeafNode;
}

impl TreeSyncable for ParentNode {
    type TreeSyncableError = MlsNodeError;
    fn node_content(&self) -> &[u8] {
        self.public_key.as_slice()
    }

    fn unmerged_leaves(&self) -> Result<&[NodeIndex], Self::TreeSyncNodeError> {
        Ok(&self.unmerged_leaves)
    }

    fn parent_hash(&self) -> &[u8] {
        &self.parent_hash
    }

    fn tree_hash(&self) -> &[u8] {
        &self.tree_hash
    }

    fn verify(&self) -> Result<(), Self::TreeSyncNodeError> {
        Err(Self::TreeSyncableError::NodeTypeError)
    }
}

impl TreeSyncableMut<MlsNodeError> for ParentNode {
    fn clear_unmerged_leaves(&mut self) -> Result<(), Self::TreeSyncNodeError> {
        Ok(self.unmerged_leaves = vec![])
    }

    fn add_unmerged_leaf(&mut self, node_index: NodeIndex) -> Result<(), Self::TreeSyncNodeError> {
        Ok(self.unmerged_leaves.push(node_index))
    }

    fn set_parent_hash(&mut self, parent_hash: Vec<u8>) {
        self.parent_hash = parent_hash
    }

    fn set_tree_hash(&mut self, tree_hash: Vec<u8>) {
        self.parent_hash = tree_hash
    }
}

implement_error! {
    pub enum MlsNodeError {
        NodeVerificationError = "Could not verify this node.",
        NodeTypeError = "The given node is of the wrong type.",
    }
}

//enum MlsNode {
//    Parent(ParentNode),
//    Leaf(LeafNode),
//}
//
//impl TreeSyncNode for MlsNode {
//    fn node_content(&self) -> &[u8] {
//        match self {
//            MlsNode::Parent(parent_node) => parent_node.public_key.as_slice(),
//            MlsNode::Leaf(leaf_node) => leaf_node.key_package.hpke_init_key().as_slice(),
//        }
//    }
//
//    fn unmerged_leaves(&self) -> Result<&[NodeIndex], TreeSyncNodeError> {
//        match self {
//            MlsNode::Parent(parent_node) => Ok(&parent_node.unmerged_leaves),
//            MlsNode::Leaf(_) => Err(TreeSyncNodeError::NodeTypeError),
//        }
//    }
//
//    fn clear_unmerged_leaves(&mut self) -> Result<(), TreeSyncNodeError> {
//        match *self {
//            // Or should I call `clear()` here instead?
//            MlsNode::Parent(ref mut parent_node) => {
//                parent_node.unmerged_leaves = vec![];
//                Ok(())
//            }
//            MlsNode::Leaf(_) => Err(TreeSyncNodeError::NodeTypeError),
//        }
//    }
//
//    fn add_unmerged_leaf(&mut self, node_index: NodeIndex) -> Result<(), TreeSyncNodeError> {
//        match self {
//            MlsNode::Parent(parent_node) => {
//                parent_node.unmerged_leaves.push(node_index);
//                Ok(())
//            }
//            MlsNode::Leaf(_) => Err(TreeSyncNodeError::NodeTypeError),
//        }
//    }
//
//    fn set_parent_hash(&mut self, parent_hash: Vec<u8>) {
//        match *self {
//            MlsNode::Parent(ref mut parent_node) => parent_node.parent_hash = parent_hash,
//            MlsNode::Leaf(ref mut leaf_node) => {
//                let parent_hash_extension = ParentHashExtension::new(&parent_hash);
//                leaf_node
//                    .key_package
//                    .add_extension(Box::new(parent_hash_extension));
//            }
//        }
//    }
//
//    fn parent_hash(&self) -> &[u8] {
//        match self {
//            MlsNode::Parent(parent_node) => &parent_node.parent_hash,
//            MlsNode::Leaf(leaf_node) => leaf_node
//                .key_package
//                .extension_with_type(ParentHash)
//                // We can unwrap here, because leaf nodes can only be created
//                // from key packages that contain an parent hash extension.
//                .unwrap()
//                .to_parent_hash_extension()
//                // We can unwrap here, because we just checked, that the type of
//                // the extension is `ParentHash`.
//                .unwrap()
//                .parent_hash(),
//        }
//    }
//
//    fn set_tree_hash(&mut self, tree_hash: Vec<u8>) {
//        match *self {
//            MlsNode::Parent(ref mut parent_node) => parent_node.tree_hash = tree_hash,
//            MlsNode::Leaf(ref mut leaf_node) => leaf_node.tree_hash = tree_hash,
//        }
//    }
//
//    fn tree_hash(&self) -> &[u8] {
//        match self {
//            MlsNode::Parent(parent_node) => parent_node.tree_hash,
//            MlsNode::Leaf(leaf_node) => leaf_node.tree_hash,
//        }
//    }
//
//    fn verify(&self) -> Result<bool, super::treesyncnode::TreeSyncNodeError> {
//        match self {
//            MlsNode::Parent(parent_node) => todo!(),
//            MlsNode::Leaf(key_package) => todo!(),
//        }
//    }
//}
