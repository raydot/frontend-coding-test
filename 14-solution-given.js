// Find the missing letters that keep the string from being a pangram

function missingCharacters(string) {
  let m = new Map();
  var arr = [];

  for (let i = 97; i < 123; i++) {
    m.set(i, 0);
  }

  for (i = 0; i < string.length; i++) {
    m.set(string.charCodeAt(i), 1);
  }

  m.forEach(function (value, key) {
    if (!value) arr.push(String.fromCharCode(key));
  });

  return arr.length === 0 ? "It's a pangram!" : `Missing letters: ${arr}`;
}

console.log(missingCharacters("this is for the daves i know"));
console.log(
  missingCharacters(
    "marvin was just another zipper-headed beef cook seeking to waylay uxorious queens"
  )
);
