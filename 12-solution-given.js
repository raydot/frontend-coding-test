function findBiggestNumber(arr) {
  if (arr.length === 0) {
    console.log("BAD DOG!");
    return null;
  }

  var final = arr.sort(function (a, b) {
    return (
      parseInt(b.toString() + a.toString(), 10) -
      parseInt(a.toString() + b.toString(), 10)
    );
  });

  return final.join("");
}

var arr = [81, 67, 74, 55, 342, 901, 5, 345, 0, 78945];

console.log(findBiggestNumber(arr));
