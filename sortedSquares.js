/***
 * Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
 */
var sortedSquares = function(nums) {
    const result = new Array(nums.length);
    let l = 0;
    let r = nums.length - 1;
 
    for (let i = result.length - 1; i >= 0; i--) {
        if (Math.abs(nums[l]) < Math.abs(nums[r])) {
            result[i] = nums[r]**2;
            r--;
        } else {
            result[i] = nums[l]**2;
            l++;
        }
    }
 
    return result;
 };