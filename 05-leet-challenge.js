/**
 *   Given a string s, find the first non-repeating character
 *   in it and return its index. If it does not exist, return -1.
 *
 * Constraints:
 * 1 <= s.length <= 105
 * s consists of only lowercase English letters.
 */

const firstUniqueCharacter = (string) => {
  let splitString = string.split("");
  let start = 0;
  let end = splitString.length - 1;
  let trackerObject = {};
  splitString.forEach((item) => {
    if (trackerObject[item] === undefined) trackerObject[item] = 1;
    else trackerObject[item] += 1;
  });

  const trackerObjectArray = Object.entries(trackerObject);

  for (let i = 0; i < trackerObjectArray.length; i++) {
    if (trackerObjectArray[i][1] === 1) {
      return string.indexOf(trackerObjectArray[i][0]);
    }
  }

  return -1;
};

const testString = "supercallafragilisticexpialidocious";

console.log(firstUniqueCharacter(testString));
