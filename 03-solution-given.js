const findAnagrams = (arr) => {
  var l = [];
  var m = new Map();
  for (let i = 0; i < arr.length; i++) {
    // sort each word by letter
    let source = arr[i].split("").sort().join("");

    if (!m.has(source)) {
      l = [];
      l.push(arr[i]);
      m.set(source, l);
    } else {
      m.get(source).push(arr[i]);
    }
  }

  for (var value of m.values()) {
    console.log(value);
  }
};

var testArr = ["dog", "god", "evade", "log", "davee", "cat", "tac"];
findAnagrams(testArr);
