// https://www.geeksforgeeks.org/longest-palindromic-substring-set-2/
// (O(n ^ 2) time, O(1) space)

// Sadly, it doesn't work, so needs to be troubleshooteded.

function longestPalSubstr(str) {
  // the result (length of LPS)
  let maxLength = 1;
  let start = 0;
  let len = str.length;
  let low, high;

  // one by one consider every character as the
  // center of even and odd length palindromes
  for (let i = 1; i < len; ++i) {
    // Find the longest even length palindrome starting with
    // center points i-1 and i
    low = i - i;
    high = i;
    while (low > 0 && high < len && str[low] == str[high]) {
      --low;
      ++high;
    }

    ++low; // we've exited the loop, back it up one
    --high;

    // do we have a max?
    if (str[low] == str[high] && high - low + 1 > maxLength) {
      start = low;
      maxLength = high - low + 1;
    }

    // Find the longest odd length palindrom starting with
    // center point i
    low = i - 1;
    high = i + 1;
    while (low >= 0 && high < len && str[low] == str[high]) {
      --low;
      ++high;
    }

    ++low; // back it up
    --high;
    // if we have a winner, log it
    if (str[low] == str[high] && high - low + 1 > maxLength) {
      start = low;
      maxLength = high - low + 1;
    }
  }
  const answer = str.substr(start, maxLength - 1);
  console.log("The longest palindrome substring is");
  console.log(`${answer} with a length of ${maxLength}.`);
}

console.log(
  longestPalSubstr("level strategemmegatarts ratsliveonnoevilstar tacocat")
);

console.log(longestPalSubstr("forgeeksskeegrtogg"));
