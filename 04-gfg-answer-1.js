/**
 * MINIMUM DISTANCE BETWEEN WORDS OF A STRING
 *
 * Given a string s and two words w1 and w2 that are present in S.
 * The task is to find the minimum distance between w1 and w1.
 *
 * A simple approach is to consider every occurence of w1, find the
 * closest w2, and keep track of the minimum distance.
 */

function distance(s, w1, w2) {
  if (w1 == w2) return 0;

  let words = s.split(" ");

  // assume total length of the string as minimum distance
  let min_dist = words.length + 1;

  // traverse the string
  for (let index = 0; index < words.length; index++) {
    if (words[index] == w1) {
      for (let search = 0; search < words.length; search++) {
        if (words[search] == w2) {
          // the distance between the words is the
          // index of the first word - the current
          // word index
          let curr = Math.abs(index - search) - 1;

          // comparing current distance with the
          // previously measured distance
          if (curr < min_dist) min_dist = curr;
        }
      }
    }
  }
  return min_dist;
}

let s =
  "geeks are geeking while greeks are greeking in practice like old geeks";
let w1 = "geeks";
let w2 = "practice";

console.log(distance(s, w1, w2));
