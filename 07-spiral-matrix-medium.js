// https://medium.com/@jpena91/enter-the-spiral-matrix-3d1470f8cf9f
// This function answers the question:
// Create a function that takes an integer N and returns an
// N x N Matrix Spiral

const matrix = (n) => {
  const results = [];

  // Loop as long as i is less than n
  // pushing an empty sub array into results

  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  // Set starting variables
  let counter = 1; // number to push
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    // Top row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++; // go down one row
    // Right column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--; // start moving from right to left

    // top and right side column built
    // start building bottom row

    // Bottom row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // start column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }
  return results;
};

console.log(matrix(3));
console.log(matrix(5));
