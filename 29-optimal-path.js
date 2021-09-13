// https://baffinlee.com/leetcode-javascript/problem/minimum-path-sum.html

const minPathSum = (grid) => {
  var m = grid.length;
  var n = (grid[0] || []).length;
  var dp = Array(m);
  var left = 0;
  var top = 0;

  if (!m || !n) return 0;

  for (let i = 0; i < m; i++) {
    dp[i] = Array(n);
    for (let j = 0; j < n; j++) {
      top = i === 0 ? Number.MAX_SAFE_INTEGER : dp[i - 1][j];
      left = j === 0 ? Number.MAX_SAFE_INTEGER : dp[i][j - 1];
      dp[i][j] = grid[i][j] + (i === 0 && j === 0 ? 0 : Math.min(left, top));
    }
  }
  console.log(dp);
  return dp[m - 1][n - 1];
};

console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
);
