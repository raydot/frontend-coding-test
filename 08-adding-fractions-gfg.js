// function to return greatest common denominator

const gcd = (a, b) => {
  console.log(`a: ${a}, b: ${b}`);
  if (a === 0) return b;
  return gcd(b % a, a);
};

// Function to convert the fraction result into
// its simplest form
const lowest = (den3, num3) => {
  // finding gcd of both terms
  let common_factor = gcd(num3, den3);

  // simplifying both terms by dividing by
  // the common factor
  den3 = parseInt(den3 / common_factor);
  num3 = parseInt(num3 / common_factor);

  console.log(`${num3}/${den3}`);
};

// last but not least, function to add two fractions
const addFraction = (num1, den1, num2, den2) => {
  // finding gcd of den1 and den2
  let den3 = gcd(den1, den2);

  // demoninator of final fraction
  // obtained by funding
  // LCM of den1 and den2
  // LCM * GCD = a * b
  den3 = (den1 * den2) / den3;

  // Changing the fractions to have the
  // same denominator of the final fraction obtained
  let num3 = num1 * (den3 / den1) + num2 * (den3 / den2);

  // Call lowest to convert final fraction into its simplest form
  lowest(den3, num3);
};

// console.log(gcd(6, 8));
// console.log(gcd(21, 41));
// console.log(lowest(6, 8));
// console.log(lowest(21, 41));
console.log(addFraction(21, 22, 17, 45));
