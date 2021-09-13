// https://dev.to/urfan/leetcode-pascal-s-triangle-with-javascript-2kch

const generatePascalsTriangle = (numRows) => {
  var triangle = [];

  // First base case
  if (numRows == 0) return triangle;

  for (let i = 0; i < numRows; i++) {
    triangle[i] = [];
    // second base case
    triangle[i][0] = 1;

    for (let j = 1; j < i; j++) {
      triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }
    // the last element of all rows is one
    triangle[i][i] = 1;
  }

  return triangle;
};

console.log(generatePascalsTriangle(5));
console.log(generatePascalsTriangle(10));
