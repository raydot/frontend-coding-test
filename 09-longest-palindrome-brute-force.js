// function printSubStr(str, low, high) {
//   //console.log("here", str, low, high);
//   for (let i = low; i <= high; ++i) console.log(str[i]);
// }

// Time complexity: O(n^3)

// prints longest palindrome substring
// returns length of palindrome
function longestPalSubstr(str) {
  let n = str.length;

  // all substrings of length 1 are, of course, palindromes
  let maxLength = 1,
    start = 0;

  // nested loop to mark start and end index
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let flag = 1;

      // check palindrome (maybe should be separate function)
      for (let k = 0; k < (j - i + 1) / 2; k++)
        if (str[i + k] != str[j - k]) flag = 0;

      // Palindrome
      if (flag != 0 && j - i + 1 > maxLength) {
        start = i;
        maxLength = j - i + 1;
      }
    }
  }

  const answer = str.substr(start, maxLength);
  //const answer = printSubStr(str, start, start + maxLength - 1);
  //console.log(answer);
  console.log(`The longest palindrome in '${str}' is ${answer}`);

  return maxLength;
}

console.log(longestPalSubstr("forgeeksskeegfor"));
console.log(longestPalSubstr("larrysaysevadedavedoeshe"));
