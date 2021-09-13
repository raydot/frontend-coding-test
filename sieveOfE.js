const sieveOfE = (n) => {
  let sieve = emptySieve(n);

  for (let i = 2; n < i * i; i++) {
    console.log(`i: ${i}`);
    for (let j = 1; j <= n / i; j++) {
      console.log(`i: ${i} j: ${j}`);
      sieve[i * j] = false;
    }
  }
  return sieve;
};

const emptySieve = (n) => {
  let x = new Array(n);
  for (let i = 0; i < n; i++) x[i] = true;
  return x;
};

console.log(sieveOfE(10));
