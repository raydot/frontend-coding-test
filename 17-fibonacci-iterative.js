// iterative fibonacci

var fib = function (n) {
  var last = 1;
  var penultimate = 0;
  var sum = 0;
  for (var i = 0; i <= n; i++) {
    sum = last + penultimate;
    last = penultimate;
    penultimate = sum;

    console.log(`x: ${last}, y: ${penultimate} z: ${sum}`);
  }
  return sum;
};

// 1: 1: 2: 3: 5: 8: 13 etc...
console.log(fib(9));

// recursive fionacci
let n = 9;
console.log("fib2", fib2(n));
function fib2(n) {
  if (n <= 1) return n;
  return fib2(n - 1) + fib2(n - 2);
}

// memoized fibonacci
function fib3(n, cache = []) {
  //let cache = []
  if (cache[n]) {
    return cache[n];
  } else {
    if (n < 3) return 1;
    else {
      cache[n] = fib3(n - 1, cache) + fib3(n - 2, cache);
    }
  }
  return cache[n];
}

console.log("memoFib:", fib3(9));
