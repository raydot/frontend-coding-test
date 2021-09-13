// Use the Newton-Raphson method of
// solving equations to find the square root of a number

// https://www.geeksforgeeks.org/program-for-newton-raphson-method/

const EPSILON = 0.001;

// An example function whose solution is determined
// using the bisection method.  The function is x^3 - x^2 + 2
function func(x) {
  return x * x * x - x * x + 2;
}

// Derivative of above function which is 3*x^x - 2*x
function derivFunc(x) {
  return 3 * x * x - 2 * x;
}

// function to find the root
function newtonRaphson(x) {
  let initVal = x;
  let h = func(x) / derivFunc(x);
  while (Math.abs(h) >= EPSILON) {
    h = func(x) / derivFunc(x);
    x = x - h;
  }

  return `The square root of ${initVal} is ${Math.round((x * 100.0) / 100.0)}`;
}

console.log(newtonRaphson(-20));
console.log(newtonRaphson(50));
