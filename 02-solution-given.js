// Second smallest element of a sorted, rotated array.

function secondSmallestInSortedRotatedArray(arr) {
  var smallest = Number.MAX_VALUE;
  var position;

  if (arr.length < 2) {
    console.log("There are not enough elements to compare");
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (smallest > arr[i]) {
      smallest = arr[i];
      position = i;
    }
  }

  console.log(`TOP position: ${position}, length: ${arr.length}`);
  while (arr[position % arr.length] === arr[(position + 1) % arr.length]) {
    position++;
    console.log(
      `position: ${position}, length: ${arr.length} (position % arr.length): ${
        position % arr.length
      } ((position + 1) % arr.length): ${(position + 1) % arr.length}`
    );
    if (position > arr.length) {
      console.log("All array elements are the same");
      return;
    }
    console.log(arr[(position + 1) % arr.length]);
  }
}

var arr = [-1, -1, 0, 0, 0, 0, 1, 1, 1, 2, 3, 4, -1, -1];
secondSmallestInSortedRotatedArray(arr);

var arr2 = [99, 1001, 2345, 98761, 99871, 99871, -5, -3, 2, 11, 23];
secondSmallestInSortedRotatedArray(arr2);

//var arr3 = [2, 2, 2, 2, 2];
//secondSmallestInSortedRotatedArray(arr3);
