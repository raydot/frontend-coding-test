// Find the longest substring with unique characters
// This doesn't work!

var set = new Set();
var finalSubStrSize = 0;

function longestSubstring(string) {
  // Basic error checking
  if (string.length === 0) {
    console.warn("You have passed in an empty string!");
    return "Quitting...";
  }

  set.clear();
  finalSubStrSize = 0;

  // Have a boolean flag for each characters ASCII value
  var flag = [];
  var j = 0;

  var inputCharArr = string.split("");

  for (let i = 0; i < inputCharArr.length; i++) {
    var c = inputCharArr[i];

    if (flag[c]) {
      extractSubString(inputCharArr, j, i);
      for (let k = j; k < i; k++) {
        if (inputCharArr[k] == c) {
          j = k + 1;
          break;
        }
        flag[inputCharArr[k]] = false;
      }
    } else flag[c] = true;
    console.log(flag);
  }

  extractSubString(inputCharArr, j, inputCharArr.length);
  return set;
}

function extractSubString(inputArr, start, end) {
  var sb = "";

  for (let i = start; i < end; i++) {
    sb = sb + inputArr[i];

    if (sb.length > finalSubStrSize) {
      finalSubStrSize = sb.length;
      set.clear();
      set.add(sb);
    } else if (sb.length === finalSubStrSize) set.add(sb);

    return sb;
  }
}

console.log(longestSubstring("aaa"));
console.log(longestSubstring("geeksforgeeks"));
console.log(longestSubstring("aaabcbdeaf"));
console.log(longestSubstring(""));
