const palindromes = function (word) {
  const validChars = "abcdefghijklmnopqrstuvwxyz0123456789";

  const newStr = word
    .toLowerCase()
    .split("")
    .filter((character) => validChars.includes(character))
    .join("");

  const revStr = newStr.split("").reverse().join("");

  // Return the outcome of the comparison which will either be true or false
  return newStr === revStr;
};
// Do not edit below this line
module.exports = palindromes;
