// https://www.youtube.com/watch?v=pcPX_UAuIJA
// points out that there are a ton of edge cases

const myAtoi = (str) => {
  if (str == null || str.length == 0) {
    return 0;
  }
  var sign = 1;
  var i = 0;
  var n = str.length;
  while (i < n && str[i] == " ") ++i;
  if (i >= n) return 0;

  if (str[i] == "+" || str[i] == "-") {
    sign = str[i++] == "+" ? 1 : -1;
  }
  var res = 0;

  while (i < n && Number.isInteger(+str[i])) {
    res = res * 10 + (+str[i++] - "0"); // horners rule
    console.log(res);
    if (res * sign > Math.MAX_VALUE || res * sign < Math.MIN_VALUE)
      return sign == 1 ? Math.MAX_VALUE : Math.MIN_VALUE;
  }

  return res * sign;
};

// Horner's Rule goes left to right converts string to int

console.log(myAtoi("42"));
console.log(myAtoi("4193 with words"));
