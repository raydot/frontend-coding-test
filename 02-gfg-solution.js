//https://www.geeksforgeeks.org/search-an-element-in-a-sorted-and-pivoted-array/

/* JavaScript Program to search an element
   in a sorted and pivoted array*/

/* Standard Binary Search function*/
function binarySearch(arr, low, high, key) {
  if (high < low) {
    return -1;
  }

  let mid = Math.floor((low + high) / 2);
  if (key == arr[mid]) return mid;

  if (key > arr[mid]) return binarySearch(arr, mid + 1, high, key);

  // else
  return binarySearch(arr, low, mid - 1, key);
}

// function to get pivot
// e. g. for array [3, 4, 5, 6, 1, 2] it returns 3 (index 6)
function findPivot(arr, low, high) {
  //base cases
  if (high < low) return -1;
  if (high == low) return low;

  let mid = Math.floor((low + high) / 2);
  if (mid < high && arr[mid] > arr[mid + 1]) return mid;

  if (mid > low && arr[mid] < arr[mid - 1]) return mid - 1;

  if (arr[low] >= arr[mid]) return findPivot(arr, low, mid - 1);

  return findPivot(arr, mid + 1, high);
}

// Search for an element key in a pivoted, sorted array of size n
function pivotedBinarySearch(arr, n, key) {
  let pivot = findPivot(arr, 0, n - 1);

  // If we can't find a pivot then the array is not rotated!
  if (pivot == -1) return binarySearcn(arr, 0, n - 1, key);

  // if we found a pivot then first compare with pivot
  // and then search in two subarrays around pivot
  if (arr[pivot] == key) return pivot;

  if (arr[0] <= key) return binarySearch(arr, 0, pivot - 1, key);

  return binarySearch(arr, pivot + 1, n - 1, key);
}

let arr1 = [5, 6, 7, 8, 9, 10, 1, 2, 3];
let n = arr1.length;
let key = 3;

// Call the function
console.log(
  `The index of the element ${key} is ${pivotedBinarySearch(arr1, n, key)}`
);

arr1 = [5, 6, 7, 8, 9, 10, 11, 12, -1, 0, 1, 2, 3];
n = arr1.length;
key = -1;

console.log(
  `The index of the element ${key} is ${pivotedBinarySearch(arr1, n, key)}`
);
