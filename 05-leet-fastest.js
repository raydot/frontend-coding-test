// Sample 72 MS submission from Leetcode
// Clever, uses indexOf to find the first match.

function firstUniqChar(str) {
  let pos = -1;

  for (let i = 0; i < str.length; i++) {
    let index = str.indexOf(str[i], 0);

    if (index !== i) continue;

    index = str.indexOf(str[i], i + 1);

    if (index === -1) {
      pos = i;
      break;
    } else continue;
  }

  return pos;
}
