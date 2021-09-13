// Basic sort, puts in *alphabetical* order
// Converts to strings and then sorts
// All undefined elements are sorted to the end of the array

const months = ["March", "Jan", "Feb", "December"];
months.sort();
console.log(months);

const array1 = [30, 5, 21, 18, 10000, 101, 88, 1];
array1.sort();
console.log(array1);

/**
 * Functionless:
 * sort()
 *
 * Arrow function:
 * sort((firstEl, secondEl) => {...})
 *
 * Compare function: (optional compare function)
 * sort(compareFn)
 * Undefined elements are sorted to the end of the array, with no call to compare function
 * * If compareFunction(a, b) returns a value > 0, then sort b before a
 * * If compareFunction(a, b) returns a value ≤ 0, leave the elements in the same order
 *
 * Inline compare function: (first element for comparison, second element for comparison)
 * sort(function compareFn(firstEl, secondEl) {...})
 *
 * Return value:
 * The sorted array
 *
 * Example:
 * function compare(a, b) {
 *  if (a is less than b by some ordering criterion) { return -1 }
 *  if (a is greater than b by some ordering criterion) { return 1 }
 *  // a must equal b
 *  return 0
 * }
 *
 * Comparing numbers instead of strings:
 * function compareNumbers(a, b) {
 *  return a - b
 * }
 */

const compareFunction1 = (a, b) => a - b;

const array2 = [30, 5, 21, 18, 10000, 101, 88, 1];
array2.sort(compareFunction1);
console.log(array2);

// Exercise: sort these by value
var items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

items.sort((a, b) => a.value - b.value);
superPrint("Sort by value:", items);

// Exercise: Sort by name:
items.sort((a, b) => {
  if (a.name > b.name) return 1;
  return -1;
});

superPrint("Sort by name:", items);

// HELPER FUNCTIONS

// ONLY DECLARATIONS ARE HOISTED, ahem
/* const superPrint = (title, arrayItem) => {
  console.log(title, "\n", arrayItem, "\n");
}; */

function superPrint(title, arrayItem) {
  console.log(title, "\n", arrayItem, "\n");
}
