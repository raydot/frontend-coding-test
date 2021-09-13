const bestGrade = (roster) => {
  let bestGrade = -10000;
  let bestStudent = "not found";

  // PAY ATTENTION TO SYNTAX!!
  for (let item of roster) {
    if (item[1] > bestGrade) {
      bestGrade = item[1];
      bestStudent = item[0];
    }
  }

  console.log(`${bestStudent} had the best grade with a score of ${bestGrade}`);
};

var arr = [
  ["Sobby", 87],
  ["Arush", 37],
  ["Tony", 24],
  ["Aruna", 93],
  ["Charles", 22],
];

bestGrade(arr);
