const removeFromArray = function (arr, ...args) {
  // create a result set
  const newArr = [];
  // loop through args
  arr.forEach((arg) => {
    if (!args.includes(arg)) {
      newArr.push(arg);
    }
  });
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
