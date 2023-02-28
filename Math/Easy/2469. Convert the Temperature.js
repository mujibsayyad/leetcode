let convertTemperature = function (celsius) {
  let kelvin = celsius + 273.15;
  let fahrenheit = celsius * 1.8 + 32.0;

  return [kelvin, fahrenheit];
};

// T.C: O(n)
// S.C: O(1)

// link :- https://leetcode.com/problems/convert-the-temperature/
