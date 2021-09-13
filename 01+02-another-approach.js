// I have the advantage of knowing Number.MAX_VALUE is involved

var testCase1 = [3, 2, 1, -5, 2, -100, 1000, 5, 6, 4];
var maxNum = Number.MIN_VALUE;
var secondNum = Number.MIN_VALUE;

const findSecondLargest = (item) => {
  testCase1.forEach((item) => {
    if (item > maxNum) maxNum = item;

    if (item > secondNum && item < maxNum) secondNum = item;
  });

  return `maxnum: ${maxNum}, secondNum: ${secondNum}`;
};

console.log(findSecondLargest(testCase1));
