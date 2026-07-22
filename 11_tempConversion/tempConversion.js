const convertToCelsius = function(temp) {
  let tempFahrenheit = Math.round(((temp - 32) * 5 / 9) * 10) / 10;
  return tempFahrenheit;
};

const convertToFahrenheit = function(temp) {
  let tempCelsius = Math.round((temp * 9 / 5 + 32) * 10) / 10;
  return tempCelsius;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
