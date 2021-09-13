const primeFactorization = (number) => {
  var factors = [];

  for (let i = 2; i <= number; i++) {
    while (number % i === 0) {
      factors.push(i);
      number /= i;
    }
  }
  return factors;
};

console.log(`20: ${primeFactorization(20)}`);

console.log(`23: ${primeFactorization(23)}`);

console.log(`315: ${primeFactorization(315)}`);

console.log(`1234567: ${primeFactorization(1234567)}`);
