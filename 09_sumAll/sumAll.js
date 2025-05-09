const sumAll = function (int1, int2) {
  if (
    int1 < 0 ||
    int2 < 0 ||
    !Number.isInteger(int1) ||
    !Number.isInteger(int2) ||
    isNaN(int1) ||
    isNaN(int2)
  ) {
    return "ERROR";
  }
  let sum = 0;
  if (int1 < int2) {
    let baseValue = int1;
    while (baseValue <= int2) {
      sum += baseValue;
      baseValue++;
    }
  } else {
    let baseValue = int2;
    while (baseValue <= int1) {
      sum += baseValue;
      baseValue++;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
