const nums = [4, 1, 7, 3, 9, 2];

function stats(nums) {
  const { min, max, sum } = nums.reduce(
    (acc, cur) => ({
      min: Math.min(acc.min, cur),
      max: Math.max(acc.max, cur),
      sum: acc.sum + cur,
    }),
    { min: Infinity, max: -Infinity, sum: 0 }
  );
  return { min, max, avg: sum / nums.length };
}

console.log(stats(nums));
// { min: 1, max: 9, avg: 4.333333333333333 }
// { min: 1, max: 9, avg: 4.333333333333333 }
