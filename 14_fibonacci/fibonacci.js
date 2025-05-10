const fibonacci = function (n) {
  if (parseInt(n) === 0) {
    return 0;
  } else if (parseInt(n) < 0) {
    return "OOPS";
  } else {
    let current = 1;
    let next = 1;
    let temp;
    for (let i = 0; i < parseInt(n); i++) {
      temp = current;
      current = next;
      next = temp + next;
    }
    return parseInt(temp);
  }
};

// Do not edit below this line
module.exports = fibonacci;
