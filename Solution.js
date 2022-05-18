
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */
var getTargetCopy = function (original, cloned, target) {
    this.referenceToTarget = null;
    searchForTarget(original, cloned, target.val);
    return this.referenceToTarget;
};

/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {number} value
 * @return {void}
 */
function searchForTarget(original, cloned, value) {
    if (original === null) {
        return;
    }
    if (original.val === value) {
        this.referenceToTarget = cloned;
        return;
    }
    searchForTarget(original.left, cloned.left, value);
    searchForTarget(original.right, cloned.right, value);
}

/*
 Function TreeNode is in-built in the solution file on leetcode.com. 
 When running the code on the website, do not include this function.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
