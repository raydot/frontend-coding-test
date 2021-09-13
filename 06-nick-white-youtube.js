// https://www.youtube.com/watch?v=3IETreEybaA
// He does the original in Java
// This beats 98.05% of javascript submissions!

// But how to actually return the longest string, which is what the question asks...

const lengthOfLongestSubstring = (s) => {
  let a_pointer = 0;
  let b_pointer = 0;
  let range = [];
  let max = 0;

  var hash_set = new Set();

  while (b_pointer < s.length) {
    if (!hash_set.has(s.charAt(b_pointer))) {
      hash_set.add(s.charAt(b_pointer));
      b_pointer++;
      if (hash_set.size > max) {
        max = hash_set.size;
        range[0] = a_pointer;
        range[1] = b_pointer;
      }
      max = Math.max(hash_set.size, max);
    } else {
      // pop dupe from the beginning
      hash_set.delete(s.charAt(a_pointer));
      a_pointer++;
    }
  }
  //console.log(hash_set);
  console.log(s.substring(range[0], range[1]));
  return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
