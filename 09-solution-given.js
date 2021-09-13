function checkPalindrome(string) {
  let reverse = string.split("").reverse().join("");
  return string === reverse;
}

function longestPalindrome(string) {
  var arrOfLongestPalindromes = [];

  for (let i = 0; i < string.length; i++) {
    var substring_outer = string.substr(i, string.length);

    for (let j = substring_outer.length; j >= 0; j--) {
      var substring_inner = substring_outer.substr(0, j);
      if (substring_inner.length <= 1) continue;

      if (checkPalindrome(substring_inner))
        arrOfLongestPalindromes.push(substring_inner);
    }
  }

  var max = 0;

  // This not the best way to find the winner.  🙂
  for (let i = 0; i < arrOfLongestPalindromes.length; i++) {
    if (max < arrOfLongestPalindromes[i].length)
      max = arrOfLongestPalindromes[i].length;
  }

  for (var s of arrOfLongestPalindromes) {
    if (s.length === max) console.log(s);
  }

  return `with a length of ${max}`;
}

console.log(
  longestPalindrome("level strategemmegatarts ratsliveonnoevilstar tacocat")
);
