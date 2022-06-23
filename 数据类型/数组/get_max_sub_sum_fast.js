/**
 *
 * @param {number[]} arr
 */
function getMaxSubSum(arr) {
  let maxSum = 0;
  let subSum = 0;
  for (let i = 0; i < arr.length; i++) {
    subSum += arr[i];
    maxSum = Math.max(maxSum, subSum);
    if (subSum < 0) subSum = 0;
  }

  return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
console.log(getMaxSubSum([1, 2, 3])); // 6
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100
