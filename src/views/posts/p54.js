// 输入：nums = [5, 8, 2, 7], target = 9
// 输出：[2,3]
// 解释：因为 nums[2] + nums[3] == 9 ，返回 [2, 3] 。

// 给定一个整数数组 nums 和一个整数目标值 target，
// 请你在该数组中找出 和为目标值 target 的那 两个 整数，并返回它们的数组下标。

const twoSum = function (nums, target) {
  const map = new Map()
  //map.set(5,0) map.set(8,1)
  //map.get(5) //0 1
  //map.has(5) // true
  for (let i = 0, len = nums.length; i < len; i++) {
    let value = target - nums[i] // 9-5=4 1 7 2
    if (map.has(value)) {
      return [map.get(value), i] // [2,3]
    }
    map.set(nums[i], i) // 5,0 8,1 2,2
  }
  return []
}

console.log(twoSum([5, 8, 2, 7], 9))
