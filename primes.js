/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {};

const isPrime = (n) => {
  let i;
  let sieve = sieveOfE(n);
  // use the square root as the endpoint.
  // Alternatively, could call n < i * i which is more flexible
  // let endPoint = Math.sqrt(n);
  //for (i = 2; i < n / 2; i++) {
  for (i = 2; n > i * i; i++) {
    // console.log(`n: ${n}, i: ${i}, n % i: ${Number(n % i)}`);
    // if (n % i === 0) {
    //   console.log(`${n} is not prime`);
    //   return false;
    // }
    // Sieve of Erasthenes approach
    sieve[i * n] = false;
  }
  //console.log(`${n} is prime`);
  return sieve;
};

const sieveOfE = (n) => {
  // create list of booleans all set to false
  let sieve = createBooleanArray(n);

  // go through and mark of using sieve trick
  for (let i = 2; i < n / 2; i++) {
    sieve[i * n] = false;
  }
  return sieve;
};

// create array of n booleans:
const createBooleanArray = (size) => {
  let a = new Array(size);
  for (let i = 0; i < size; ++i) a[i] = true;
  return a;
};

// console.log(isPrime(23));
// console.log(isPrime(27));

console.log(sieveOfE(10));
