var findDisappearedNumbers = function (nums) {
  const res = [];
  nums.sort((a, b) => a - b);
  let count = 1
  for(const i in nums) {
    console.log('*** nu', nums[i], count)
    if(nums[i] === count) {
      count++
      continue
    }
    if(nums[i] > count) {
      res.push(count)
      count++
    }
  }
  console.log('*** ', count)
  // if(count < nums.length) {
  //   console.log('*** count', count)
  //   for(let i = count; i<nums.length;i++) {
  //     res.push(i)
  //     count++
  //   }
  // }

  return res;
};

console.log(findDisappearedNumbers([1,1,1,1]));
