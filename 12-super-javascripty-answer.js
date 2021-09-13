const getLargest = (array) => {
  return array
    .map(String)
    .sort((a, b) => b + a - (a + b))
    .join("");
};

console.log(getLargest([1, 3, 42, 34, 4, 45, 6, 98, 23, 76, 9, 21, 10, 900]));
