// https://leetcode.com/problems/find-missing-observations/

/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function (rolls, mean, n) {
  let sumKnown = rolls.reduce((acc, val) => acc + val, 0); // Sum of known rolls
  let totalLen = rolls.length + n; // Total number of rolls after adding missing rolls
  let totalSum = mean * totalLen; // Total expected sum of all rolls
  let missingSum = totalSum - sumKnown; // Sum of missing rolls

  // Check if it's possible to distribute the missingSum across n rolls (each roll must be between 1 and 6)
  if (missingSum < n || missingSum > 6 * n) {
    return []; // Not possible to distribute
  }

  let ans = new Array(n).fill(Math.floor(missingSum / n)); // Start by distributing the average value
  let remainder = missingSum % n; // Distribute the remainder

  for (let i = 0; i < remainder; i++) {
    ans[i] += 1; // Add 1 to the first 'remainder' elements
  }

  return ans;
};
