function printSecondSmallestElement(arr) {
  var smallest = Number.MAX_VALUE;
  var second_smallest = Number.MAX_VALUE;

  if (arr.length < 2) {
    console.log("Invalid Input");
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      second_smallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < second_smallest && arr[i] != smallest)
      second_smallest = arr[i];
  }

  if (second_smallest == Number.MAX_VALUE)
    console.log("All elements are the same number");
  else console.log(`The second smallest element is ${second_smallest}`);
}

var arr1 = [2, 2, 2];
printSecondSmallestElement(arr1);

var arr2 = [1, 3, 47, 2, 8, 3, 7, 4, 2];
printSecondSmallestElement(arr2);
