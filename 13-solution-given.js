// Find the pairs of integers in a given array whose
// sum is equal to a given number

function findPair(arr, number) {
  var boolean = false;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; i < arr.length; j++) {
      if (arr[i] + arr[j] === number)
        if (arr[i] < arr[j]) {
          boolean = true;
          console.log(`sum: ${number} numbers: ${a[i]}, ${a[j]}`);
          continue;
        }
    }
  }
  if (!boolean)
    console.log(`No pair of numbers exist that add up to ${number}`);
}

const a = [1, 2, 3, 4, 5, 6];
const number = 6;

console.log(findPair(a, number));
