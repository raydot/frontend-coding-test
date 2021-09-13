// Going straight to the solution because the question is unclear

/**
 * Dot product of two vectors is a real number such that
 * [a1, a2, a3, a4]
 * [b1, b2, b3, b4]
 *
 * [a1b1 + a2b2 + a3b3 ...] etc.
 *
 * Returns a real number.
 */

const findDotProduct = (arrA, arrB) => {
  let min = Math.min(arrA.length, arrB.length);

  let sum = 0;

  for (let i = 0; i < min; i++) {
    sum += arrA[i] * arrB[i];
  }
  return sum;
};

const arrA = [-6, 5, 6];
const arrB = [5, 12];

console.log(`Dot product: ${findDotProduct(arrA, arrB)}`);
