function stringToInteger(string) {
  return +string;
}

function PIstringToInteger(string) {
  return parseInt(string);
}

console.log(stringToInteger("1000"));
console.log(PIstringToInteger("1000"));
console.log(PIstringToInteger("+-2112"));
