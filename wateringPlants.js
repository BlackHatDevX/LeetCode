// https://leetcode.com/problems/watering-plants/
var wateringPlants = function (plants, capacity) {
  var stepCounter = 0;
  var bucket = capacity;
  for (var n = 0; n < plants.length; n++) {
    if (plants[n] > bucket) {
      bucket = capacity - plants[n];
      stepCounter = stepCounter + n + n + 1;
    } else {
      bucket = bucket - plants[n];
      stepCounter += 1;
    }
  }
  return stepCounter;
};
