use super::treemath::*;
use super::FLBBinaryTree;
use super::FLBBinaryTreeError;
use super::NodeIndex;

#[derive(Clone, Debug, PartialEq)]
pub(crate) struct ABinaryTree<T> {
    nodes: Vec<T>,
}

impl<T> ABinaryTree<T> {
    /// Check if a given index is still within the tree.
    fn node_in_tree(&self, node_index: NodeIndex) -> Result<(), FLBBinaryTreeError> {
        node_in_tree(node_index, self.size()).map_err(|_| FLBBinaryTreeError::OutOfBounds)
    }
}

impl<T> FLBBinaryTree<T> for ABinaryTree<T> {
    fn new(nodes: Vec<T>) -> Result<Self, FLBBinaryTreeError> {
        if nodes.len() % 2 != 1 {
            Err(FLBBinaryTreeError::InvalidNumberOfNodes)
        } else if nodes.len() > NodeIndex::max_value() as usize {
            Err(FLBBinaryTreeError::OutOfRange)
        } else {
            Ok(ABinaryTree { nodes })
        }
    }

    fn node(&self, node_index: NodeIndex) -> Result<&T, FLBBinaryTreeError> {
        self.node_in_tree(node_index)?;
        Ok(self.nodes.get(node_index as usize).unwrap())
    }

    fn node_mut(&mut self, node_index: NodeIndex) -> Result<&mut T, FLBBinaryTreeError> {
        self.node_in_tree(node_index)?;
        Ok(self.nodes.get_mut(node_index as usize).unwrap())
    }

    fn add(&mut self, node_1: T, node_2: T) -> Result<(), FLBBinaryTreeError> {
        // Prevent the tree from becoming too large.
        if self.nodes.len() + 2 > NodeIndex::max_value() as usize {
            Err(FLBBinaryTreeError::OutOfRange)
        } else {
            self.nodes.push(node_1);
            self.nodes.push(node_2);
            Ok(())
        }
    }

    fn remove(&mut self) -> Result<(), FLBBinaryTreeError> {
        // Check that there are enough nodes to remove.
        if self.nodes.len() < 2 {
            Err(FLBBinaryTreeError::NotEnoughNodes)
        } else {
            self.nodes.pop();
            self.nodes.pop();
            Ok(())
        }
    }

    fn size(&self) -> NodeIndex {
        self.nodes.len() as u32
    }

    fn direct_path(&self, node_index: NodeIndex) -> Result<Vec<NodeIndex>, FLBBinaryTreeError> {
        direct_path(node_index, self.size()).map_err(|_| FLBBinaryTreeError::OutOfBounds)
    }

    fn copath(&self, node_index: NodeIndex) -> Result<Vec<NodeIndex>, FLBBinaryTreeError> {
        copath(node_index, self.size()).map_err(|_| FLBBinaryTreeError::OutOfBounds)
    }

    fn lowest_common_ancestor(
        &self,
        node_index_1: NodeIndex,
        node_index_2: NodeIndex,
    ) -> Result<NodeIndex, FLBBinaryTreeError> {
        self.node_in_tree(node_index_1)?;
        self.node_in_tree(node_index_2)?;
        Ok(lowest_common_ancestor(node_index_1, node_index_2))
    }
}
