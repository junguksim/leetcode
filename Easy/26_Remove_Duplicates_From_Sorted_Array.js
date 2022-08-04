/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let k = 1;
  let lastNumber = nums[0];
  let i = 1;
  while (i < nums.length) {
    let num = nums[i];
    if (lastNumber === num) {
      nums.splice(i, 1);
    } else {
      k++;
      lastNumber = num;
      i++;
    }
  }
  console.log(nums);
  console.log(k);
  return k;
};
removeDuplicates([-1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2]);
removeDuplicates([1, 1, 2]);
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
