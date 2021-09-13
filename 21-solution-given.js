// Can't believe there's more to it than this

function checkTwoExponentialNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] != arr[j]) {
        if (Math.pow(arr[i], arr[j]) === Math.pow(arr[j], arr[i]))
          console.log(`The pair of numbers are ${arr[i]} and ${arr[j]}`);
      }
    }
  }
}
