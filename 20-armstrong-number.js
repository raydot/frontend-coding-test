// An Armstrong number is a number where each of the digits
// to the power of the total number of digits equals the number itself.

// 153 is an Armstrong number because it has three digits and
// 1*1*1 + 5*5*5 + 3*3*3 = 1 + 225 + 27 = 153

// Going straight for the solution given:

const checkArmstrongNumber = (number) => {
  let str = number.toString();
  let length = str.length;
  let sum = 0;
  for (let i = 0; i < length; i++) {
    sum += Math.pow(+str.charAt(i), length);
  }
  process.stdout.write(`${number} is Armstrong? `);
  return sum === number ? true : false;
};

console.log(checkArmstrongNumber(100));
console.log(checkArmstrongNumber(153));
console.log(checkArmstrongNumber(1634));
console.log(checkArmstrongNumber(548834));
