use openmls_traits::OpenMlsCryptoProvider;
use tls_codec::{
    Error as TlsCodecError, Serialize, Size, TlsByteVecU8, TlsDeserialize, TlsSerialize, TlsSize,
    TlsSliceU32, TlsSliceU8, TlsVecU32,
};

use crate::{
    binary_tree::{Addressable, LeafIndex},
    ciphersuite::{Ciphersuite, HpkePublicKey},
    treesync::hashes::{LeafNodeHashInput, ParentNodeTreeHashInput},
};

use crate::key_packages::KeyPackage;

use super::hashes::{ParentHashError, ParentHashInput};
use super::mls_node::MlsNode;

#[derive(Debug, PartialEq, Clone, TlsDeserialize, TlsSerialize, TlsSize)]
pub(crate) struct ParentNode {
    public_key: HpkePublicKey,
    parent_hash: TlsByteVecU8,
    unmerged_leaves: TlsVecU32<LeafIndex>,
}

#[derive(Debug, Clone)]
pub(crate) enum Node {
    LeafNode(KeyPackage),
    ParentNode(ParentNode),
}

#[derive(Debug, Clone, Default)]
/// This intermediate struct on top of `Option<Node>` allows us to cache tree
/// hash values.
pub(crate) struct TreeSyncNode {
    tree_hash: Option<Vec<u8>>,
    node: Option<Node>,
}

impl From<Node> for TreeSyncNode {
    fn from(node: Node) -> Self {
        Self {
            tree_hash: None,
            node: Some(node),
        }
    }
}

impl TreeSyncNode {
    pub(super) fn blank() -> Self {
        Self::default()
    }

    pub(super) fn node(&self) -> &Option<Node> {
        &self.node
    }

    pub(super) fn node_mut(&mut self) -> &mut Option<Node> {
        &mut self.node
    }

    pub(super) fn tree_hash(&self) -> &Option<Vec<u8>> {
        &self.tree_hash
    }

    pub(super) fn erase_tree_hash(&mut self) {
        self.tree_hash = None
    }

    pub(super) fn verify_parent_hash(
        &self,
        child: &TreeSyncNode,
        other_child_resolution: Vec<HpkePublicKey>,
    ) -> Result<(), TreeSyncNodeError> {
        todo!()
    }

    pub(super) fn compute_tree_hash(
        &mut self,
        backend: &impl OpenMlsCryptoProvider,
        ciphersuite: &Ciphersuite,
        leaf_index_option: Option<LeafIndex>,
        left_hash_result: Result<Vec<u8>, TreeSyncNodeError>,
        right_hash_result: Result<Vec<u8>, TreeSyncNodeError>,
    ) -> Result<Vec<u8>, TreeSyncNodeError> {
        // If there's a cached tree hash, use that one.
        if let Some(hash) = self.tree_hash() {
            return Ok(hash.clone());
        };
        // Otherwise compute it.
        let left_hash = left_hash_result?;
        let right_hash = right_hash_result?;
        // Check if I'm a leaf node.
        let hash = if let Some(leaf_index) = leaf_index_option {
            let key_package_option = match self.node.as_ref() {
                Some(ref node) => Some(node.as_leaf_node()?),
                None => None,
            };
            let hash_input = LeafNodeHashInput::new(&leaf_index, key_package_option);
            hash_input.hash(ciphersuite, backend)
        } else {
            let parent_node_option = match self.node.as_ref() {
                Some(ref node) => Some(node.as_parent_node()?),
                None => None,
            };
            let hash_input = ParentNodeTreeHashInput::new(
                parent_node_option,
                TlsSliceU8(&left_hash),
                TlsSliceU8(&right_hash),
            );
            hash_input.hash(ciphersuite, backend)
        };
        self.tree_hash = Some(hash.clone());
        Ok(hash)
    }
}

impl Node {
    pub(crate) fn as_leaf_node(&self) -> Result<&KeyPackage, TreeSyncNodeError> {
        match self {
            Node::LeafNode(kp) => Ok(&kp),
            Node::ParentNode(_) => Err(TreeSyncNodeError::AsLeafError),
        }
    }

    pub(crate) fn as_leaf_node_mut(&mut self) -> Result<&mut KeyPackage, TreeSyncNodeError> {
        match self {
            Node::LeafNode(ref mut kp) => Ok(kp),
            Node::ParentNode(_) => Err(TreeSyncNodeError::AsLeafError),
        }
    }

    pub(crate) fn as_parent_node(&self) -> Result<&ParentNode, TreeSyncNodeError> {
        match self {
            Node::LeafNode(_) => Err(TreeSyncNodeError::AsParentError),
            Node::ParentNode(ref node) => Ok(node),
        }
    }

    pub(crate) fn as_parent_node_mut(&mut self) -> Result<&mut ParentNode, TreeSyncNodeError> {
        match self {
            Node::LeafNode(_) => Err(TreeSyncNodeError::AsParentError),
            Node::ParentNode(ref mut node) => Ok(node),
        }
    }
}

implement_error! {
    pub enum TreeSyncNodeError {
        Simple{
            AsLeafError = "This is not a leaf node.",
            AsParentError = "This is not a parent node.",
        }
        Complex {
            ParentHashError(ParentHashError) = "Error while computing parent hash.",
        }
    }
}

impl ParentNode {
    /// Return the value of the node relevant for the parent hash and tree hash.
    /// In case of MLS, this would be the node's HPKEPublicKey. TreeSync
    /// can then gather everything necessary to build the `ParentHashInput`,
    /// `LeafNodeHashInput` and `ParentNodeTreeHashInput` structs for a given node.
    fn node_content(&self) -> &HpkePublicKey {
        &self.public_key
    }

    /// Get the list of unmerged leaves.
    pub(crate) fn unmerged_leaves(&self) -> &[LeafIndex] {
        self.unmerged_leaves.as_slice()
    }

    /// Clear the list of unmerged leaves.
    fn clear_unmerged_leaves(&mut self) {
        self.unmerged_leaves = Vec::new().into()
    }

    /// Add a `LeafIndex` to the node's list of unmerged leaves.
    pub(super) fn add_unmerged_leaf(&mut self, leaf_index: LeafIndex) {
        self.unmerged_leaves.push(leaf_index)
    }

    /// Set the parent hash value of this node.
    pub(super) fn set_parent_hash(
        &mut self,
        backend: &impl OpenMlsCryptoProvider,
        ciphersuite: &Ciphersuite,
        parent_hash: &[u8],
        original_child_resolution: &[HpkePublicKey],
    ) -> Result<(), TreeSyncNodeError> {
        let parent_hash_input =
            ParentHashInput::new(&self.public_key, &parent_hash, original_child_resolution);
        self.parent_hash = parent_hash_input.hash(backend, ciphersuite)?.into();
        Ok(())
    }

    /// Get the parent hash value of this node.
    pub(crate) fn parent_hash(&self) -> &[u8] {
        self.parent_hash.as_slice()
    }
}

impl From<&MlsNode> for Node {
    fn from(mls_node: &MlsNode) -> Self {
        let tsn = match mls_node {
            MlsNode::Leaf(ref kp) => Node::LeafNode(kp.clone()),
            MlsNode::Parent(ref pn) => {
                let node = ParentNode {
                    public_key: pn.public_key.clone(),
                    parent_hash: pn.parent_hash.clone().into(),
                    unmerged_leaves: pn.unmerged_leaves.clone().into(),
                };
                Node::ParentNode(node)
            }
        };
        tsn
    }
}

impl Addressable for TreeSyncNode {
    type Address = HpkePublicKey;

    fn address(&self) -> Option<Self::Address> {
        self.node.as_ref().map(|node| match node {
            Node::LeafNode(kp) => kp.hpke_init_key().clone(),
            Node::ParentNode(node) => node.node_content().clone(),
        })
    }
}
