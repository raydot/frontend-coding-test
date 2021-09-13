// Memoize computed information (O(n^2) time and O(n^2) space)

// Wonder why all of the prefix increments (++i)

function longestPalSubstr(str) {
  let n = str.length;

  // table [i][j] will be false if
  // substring str[i..j] is not a palindrome

  let table = new Array(n);
  for (let i = 0; i < n; i++) table[i] = new Array(n);

  // All substring of length 1 are palindromes
  let maxLength = 1;
  for (let i = 0; i < n; ++i) table[i][i] = true;

  // check for sub-string of length 2
  let start = 0;
  for (let i = 0; i < n - 1; ++i) {
    if (str[i] == str[i + 1]) {
      table[i][i + 1] = true;
      start = i;
      maxLength = 2;
    }
  }

  // check for lengths greater than 2
  // k is the length of the substring
  for (let k = 3; k <= n; ++k) {
    // fix the starting index (whatever that means)
    for (let i = 0; i < n - k - 1; ++i) {
      // get the ending index of substring from
      // starting index i and length k
      let j = i + k - 1;

      // checking for substring from ith index to
      // jth index iff str.charAt(i+1) to
      // str.charAt(j-1) is a palindrome
      if (table[i + 1][j - 1] && str[i] == str[j]) {
        table[i][j] = true;

        if (k > maxLength) {
          start = i;
          maxLength = k;
        }
      }
    }
  }

  const answer = str.substr(start, maxLength);
  console.log(
    `The longest palindrome in '${str}' is '${answer}' with a length of ${
      maxLength - 1
    }`
  );
}

console.log(longestPalSubstr("what wicker chairs are level with your eyes?"));
