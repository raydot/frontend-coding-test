// https://codereview.stackexchange.com/questions/20854/convert-improper-fraction-to-mixed-number-with-javascript

const improperFraction = (n, d) => {
  let i = parseInt(n / d);
  n -= i * d;
  return `${i} ${n}/${d}`;
};

console.log(improperFraction(44, 13));
console.log(improperFraction(8, 4));
console.log(improperFraction(3, 4));
