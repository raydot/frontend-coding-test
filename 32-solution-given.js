// This might be my favorite out of all of them:
// https://www.geeksforgeeks.org/trapping-rain-water/

function findVolumeOfWater(arr) {
  var left = [];
  var right = [];
  var volume = 0;

  left[0] = arr[0];
  right[arr.length - 1] = arr[arr.length - 1];

  for (let i = 0; i < arr.length; i++) {
    left[i + 1] = Math.max(left[i], arr[i + 1]);
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    right[i - 1] = Math.max(right[i], arr[i - 1]);
  }

  for (let i = 0; i < arr.length; i++) {
    volume = volume + Math.min(left[i], right[i]) - arr[i];
  }

  return volume;
}

var arr = [4, 0, 3, 0, 67, 0, 4, 0, 98];
console.log(findVolumeOfWater(arr));

var arr2 = [3, 0, 2, 0, 4];
console.log(findVolumeOfWater(arr2));
