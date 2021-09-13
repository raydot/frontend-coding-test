const powerOfTen = (number) => {
  return number % 10 ? false : true;
};

console.log(powerOfTen(1000));
console.log(powerOfTen(123));

// My answer was a start but doesn't deal with the edge cases. Here is the solution given:

const checkNumberPowerOfTen = (number) => {
  if (number >= 10) {
    return checkNumberPowerOfTen(number / 10);
  } else if (number <= 0.1) {
    return checkNumberPowerOfTen(number * 10);
  } else if (number === 1) {
    return true;
  }
  return false;
};

console.log(checkNumberPowerOfTen(1000));
console.log(checkNumberPowerOfTen(123));
console.log(checkNumberPowerOfTen(0.0001));
