
using namespace std;

class Solution {
    
    TreeNode* referenceToTarget;
    
public:
    TreeNode* getTargetCopy(TreeNode* original, TreeNode* cloned, TreeNode* target) {
        searchForTarget(original, cloned, target->val);
        return referenceToTarget;
    }
    
private:
    void searchForTarget(TreeNode* original, TreeNode* cloned, int value) {
        if (original == nullptr) {
            return;
        }
        if (original->val == value) {
            referenceToTarget = cloned;
            return;
        }
        searchForTarget(original->left, cloned->left, value);
        searchForTarget(original->right, cloned->right, value);
    }
};


/*
Struct TreeNode is in-built in the solution file on leetcode.com. 
When running the code on the website, do not include this struct.
 */
struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(NULL), right(NULL){}
};
