// Only works if words are already in length order.
function longestWordsInDictionary(dictionaryArr, input) {
  var visitedArr = [];
  var flag;
  var x = [];

  for (let i = 0; i < dictionaryArr.length; i++) {
    for (let l = 0; l < input.length; l++) {
      visitedArr[l] = false;
    }

    for (let j = 0; j < dictionaryArr[i].length; j++) {
      flag = false;
      for (let k = 0; k < input.length; k++) {
        if (input[k] === dictionaryArr[i].charAt(j) && visitedArr[k] != true) {
          visitedArr[k] = true;
          flag = true;
          break;
        }
      }
      if (!flag) break;

      if (j === dictionaryArr[i].length - 1) x.push(dictionaryArr[i]);
    }
  }

  let max = 0;

  for (let i = 0; i < x.length; i++) {
    max = Math.max(max, x.length);
  }

  for (var s of x) {
    if ((s.length = max)) console.log(`longest: ${s}`);
  }
  console.log(`${s} is the longest word`);
}

var dictionaryArr = [
  "to",
  "toettt",
  "toest",
  "doe",
  "banana",
  "dog",
  "god",
  "dogs",
  "book",
  "loofa",
  "detested",
];

longestWordsInDictionary(dictionaryArr, "dtsetogttananbannnnbbbtero");
