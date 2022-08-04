/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = nums.length - 1;
  while (i >= 0) {
    let num = nums[i];
    if (num === val) {
      nums.splice(i, 1);
    }
    i--;
  }
  return nums.length;
};

console.log(removeElement([3, 2, 2, 3, 1, 4, 9], 3));
