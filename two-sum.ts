/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number) {
  let array: number[] = [];
  nums.forEach((num: number, idx: number) => {
    nums.forEach((num2: number, idx2: number) => {
      if (num + num2 === target && !array.length && idx !== idx2) {
        array.push(...[idx, idx2]);
      }
    });
  });
  return array;
}
// @lc code=end
