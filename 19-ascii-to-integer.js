// convert a string to an actual integer, ignoring whitespace
// e. g. "42" = 42 and "  -42" = -42

var myAtoi = function (s) {
  s = s.trim();
  if (s.length == 0) return 0;
  if (s[0].toLowerCase() !== s[0].toUpperCase()) return 0;
  if (s < 1 && s > 0) return 0;
  if (s.substring(0, 2) == "+-" || s.substring(0, 2) == "-+") return 0;
  regex = /[-+]?[0-9]+/;
  var output = Number(s.match(regex));
  output = output.length > 1 ? output[0] : output;
  if (output >= Math.pow(2, 31)) return Math.pow(2, 31) - 1;
  if (output < Math.pow(-2, 31)) return Math.pow(-2, 31);
  //console.log(output, output.length);
  //output = output.substring(0, s.lastIndexOf(".") - 1);
  return output;
};

console.log(myAtoi("   42"));
console.log(myAtoi("4193 with words"));
console.log(myAtoi("-42"));
console.log(myAtoi("words and 987"));
console.log(myAtoi("-91283472332"));
console.log(myAtoi("3.14159"));
console.log(myAtoi(".1"));
console.log(myAtoi("+-12"));
console.log(myAtoi("+"));
console.log(myAtoi("2147483648"));
console.log(myAtoi("  +  413"));
