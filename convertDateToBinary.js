// https://leetcode.com/problems/convert-date-to-binary/

var convertDateToBinary = function (date) {
  let dateSeprated = date.split("-");
  return (
    dec2bin(dateSeprated[0]) +
    "-" +
    dec2bin(dateSeprated[1]) +
    "-" +
    dec2bin(dateSeprated[2])
  );
};

function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}
