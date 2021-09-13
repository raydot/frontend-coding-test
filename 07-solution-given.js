function spiralMatrix(matrix) {
  // error check
  if (matrix.length === 0) {
    console.warn("You have provided an empty matrix.  Quitting...");
    return;
  }

  var no_rows = matrix.length;
  var no_cols = matrix[0].length;

  var currentIndex_row = 0;
  var currentIndex_col = 0;

  while (currentIndex_row < no_rows && currentIndex_col < no_cols) {
    // print the first row
    for (let i = currentIndex_col; i < no_cols; i++) {
      console.log(matrix[currentIndex_row][i]);
    }
    currentIndex_row++;

    // print the last column
    for (let i = currentIndex_row; i < no_rows; i++) {
      console.log(matrix[i][no_cols - 1]);
    }
    no_cols--;

    // keep printing the last row from the remaining rows
    if (currentIndex_row < no_rows) {
      for (let i = no_cols - 1; i >= currentIndex_col; i--) {
        console.log(matrix[no_rows - 1][i]);
      }
    }
    no_rows--;

    // keep printing the last column from the remaining columns
    if (currentIndex_col < no_cols) {
      for (let i = no_rows - 1; i >= currentIndex_row; i--) {
        console.log(matrix[i][currentIndex_col]);
      }
    }
    currentIndex_col++;
  }
  return "Finished!";
}

var matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var matrix2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
var matrix3 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

console.log(spiralMatrix(matrix1));
console.log(spiralMatrix(matrix2));
console.log(spiralMatrix(matrix3));
