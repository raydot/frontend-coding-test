/**
 * 1. Factor out the 2's and divide by 2
 * 2. Factor by 3 => sqrt(n) and divide
 * 3. Factor out whatever's left
 */

const primeFactors = (n) => {
  process.stdout.write(`Factors of ${n}: `);

  while (n % 2 == 0) {
    // factor out the 2's
    process.stdout.write(`2 `);
    n = Math.floor(n / 2);
  }

  // what's left must be odd
  for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
    // While i divides n, print it and divide
    while (n % i == 0) {
      process.stdout.write(`${i} `);
      n = Math.floor(n / i);
    }
  }

  // Case of n is a prime number > 2
  if (n > 2) process.stdout.write(`${n} `);

  // end with a newline
  process.stdout.write("\n");
};

primeFactors(64);
primeFactors(315);
primeFactors(1092);
