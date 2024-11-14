// https://leetcode.com/problems/convert-the-temperature/

var convertTemperature = function (celsius) {
  const kelvin = celsius + 273.15;
  const far = celsius * 1.8 + 32.0;
  return [kelvin, far];
};
