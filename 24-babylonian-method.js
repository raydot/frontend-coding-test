// https://www.geeksforgeeks.org/square-root-of-a-perfect-square/

function squareRoot(n) {
  let x = n;
  let y = 1;
  let e = 0.000001; // accuracy level
  while (x - y > e) {
    x = (x + y) / 2;
    y = n / x;
  }
  return x;
}

console.log(squareRoot(50));
