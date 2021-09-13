function findUniqueSubstrings(input, length = 1) {
  var l = [];
  var arr = [];
  var str = "";
  var i = 0;

  // Don't forget to error check!
  if (input.length === 0) {
    console.log("BAD DOG!");
    return null;
  }

  while (i < input.length) {
    if (str.length < length) {
      str = str + input.charAt(i);
      l.push(str);
      i++;
    } else if (str.length === length) {
      str = "";
      i = i - (length - 1);
    }
  }

  for (let i = 0; i < l.length; i++) {
    if (l[i].length === length) {
      arr.push(l[i]);
    }
  }

  var uniqueArr = arr.filter((item, pos) => {
    return arr.indexOf(item) == pos;
  });

  return uniqueArr;
}

console.log(findUniqueSubstrings("abcabcdeefefafg", 3));
