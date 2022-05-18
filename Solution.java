
public class Solution {

    TreeNode referenceToTarget;

    public final TreeNode getTargetCopy(final TreeNode original, final TreeNode cloned, final TreeNode target) {
        searchForTarget(original, cloned, target.val);
        return this.referenceToTarget;
    }

    public void searchForTarget(TreeNode original, TreeNode cloned, int value) {
        if (original == null) {
            return;
        }
        if (original.val == value) {
            referenceToTarget = cloned;
            return;
        }
        searchForTarget(original.left, cloned.left, value);
        searchForTarget(original.right, cloned.right, value);
    }
}

/*
Class TreeNode is in-built in the solution file on leetcode.com. 
When running the code on the website, do not include this class.
 */
class TreeNode {

    int val;
    TreeNode left;
    TreeNode right;

    TreeNode(int x) {
        val = x;
    }
}
