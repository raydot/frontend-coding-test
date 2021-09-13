function isSubSequence(str1, str2) {
  var m = str1.length,
    n = str2.length;

  var j = 0;

  // Traverse str2 and str1, and compate current current of str2
  // with first unmatched char of str1.  If matched, keep going
  for (var i = 0; i < n && j < m; i++) {
    if (str1[j] == str2[j]) {
      j++;
    }
  }

  return j == m;
}

// Returns longest string which is a subsequence of str
function findLongestString(dict, str) {
  // console.log(dict, str);
  var result = "";
  var length = 0;

  // Traverse through all words in dictionary
  dict.forEach((word) => {
    // If current word is subsequence and is largest so far
    if (length < word.length && isSubSequence(word, str)) {
      result = word;
      length = word.length;
    }
  });

  // return longest string
  console.log("result", result);
  return result;
}

var dictionaryArr = [
  "to",
  "toettt",
  "toest",
  "doe",
  "banana",
  "dog",
  "god",
  "stab",
  "dogs",
  "book",
  "loofa",
  "detested",
];

console.log(findLongestString(dictionaryArr, "dtsetogttananbannnnbbbtero"));

dictionaryArr = ["ale", "apple", "monkey", "plea"];
console.log(findLongestString(dictionaryArr, "abpcplea"));

console.log(isSubSequence("abc", "abcdefgh"));
console.log(isSubSequence("stab", "dtsetogttananbannnnbbbtero"));
