// https://leetcode.com/problems/walking-robot-simulation

/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function (commands, obstacles) {
  let currCoordinates = [0, 0]; // Starting position at (0, 0)
  let direction = 0; // 0 = North, 1 = East, 2 = South, 3 = West
  let maxDistance = 0;

  // Directions correspond to (dx, dy) pairs for North, East, South, and West
  let directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  // Store obstacles in a set for O(1) lookup
  let obstacleSet = new Set(obstacles.map((obstacle) => obstacle.toString()));

  for (let command of commands) {
    if (command === -2) {
      // Turn left 90 degrees (counterclockwise)
      direction = (direction + 3) % 4;
    } else if (command === -1) {
      // Turn right 90 degrees (clockwise)
      direction = (direction + 1) % 4;
    } else {
      // Move forward command units
      let [dx, dy] = directions[direction];

      for (let i = 0; i < command; i++) {
        let nextX = currCoordinates[0] + dx;
        let nextY = currCoordinates[1] + dy;

        if (!obstacleSet.has([nextX, nextY].toString())) {
          currCoordinates[0] = nextX;
          currCoordinates[1] = nextY;
          // Calculate the distance squared
          let distanceSquared =
            currCoordinates[0] ** 2 + currCoordinates[1] ** 2;
          maxDistance = Math.max(maxDistance, distanceSquared);
        } else {
          break; // Stop if an obstacle is encountered
        }
      }
    }
  }

  return maxDistance;
};
