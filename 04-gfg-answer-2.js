/**
 * An EFFICIENT SOLUTION is to find the first occurrence of any element,
 * then keep track of the previous element and current element.  If
 * they are different and the distance is less than the current minimum,
 * update the minimum
 */

function distance(s, w1, w2) {
  if (w1 == w2) return 0;

  // get individual words in a list
  let words = s.split(" ");
  let n = words.length;

  // assume total length of the string as a
  // minimum distance
  let min_dist = n + 1;

  // find the first occurence of either word and store the index
  // of this occurence in prev
  let prev = 0,
    i = 0;
  for (i = 0; i < n; i++) {
    if (words[i] == w1 || words[i] == w2) {
      prev = i;
      break;
    }
  }

  // Now that you've found one of the words, traverse the string
  while (i < n) {
    if (words[i] == w1 || words[i] == w2) {
      // If there's a match:
      // 1. Check that current and prev are different
      // 2. Check if this value is smaller than existing min_dist
      if (words[prev] != words[i] && i - prev < min_dist) {
        min_dist = i - prev - 1;
      }
      prev = i;
    }
    i++;
  }
  return min_dist;
}

let s =
  "geeks are geeking while greeks are greeking in practice like old fat geeks once did";
let w1 = "geeks";
let w2 = "practice";

console.log(distance(s, w1, w2));
