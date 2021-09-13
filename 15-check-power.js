function isPower(x, y) {
  if (x == 1) return y == 1; // only power of 1 is 1

  let pow = 1;
  while (pow < y) {
    pow = pow * x;
  }

  return pow == y;
}

console.log(isPower(5, 25));
console.log(isPower(2, 30));
