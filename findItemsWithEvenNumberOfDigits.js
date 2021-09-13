var findNumbers = function (nums) {
  // let count = 0;
  // for (let i = 0; i < nums.length; i++) {
  //   // console.log(nums[i], nums[i].toString().length);
  //   if (nums[i].toString().length % 2 === 0) count++;
  // }

  let outObject = nums.filter((item) => !(item.toString().length % 2));

  console.log(outObject);
  return outObject.length;
};

console.log(findNumbers([12, 345, 2, 6, 7896]));
