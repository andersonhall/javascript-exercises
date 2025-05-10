const findTheOldest = function (people) {
  // init oldest age found
  let max = 0;
  // init index
  let maxIndex = 0;
  // loop through people
  for (let i = 0; i < people.length; i++) {
    // calc age
    const yearOfDeath = people[i].yearOfDeath || new Date().getFullYear();
    const age = yearOfDeath - people[i].yearOfBirth;
    // compare to max, and set new age if larger
    if (age > max) {
      max = age;
      maxIndex = i;
    }
  }
  return people[maxIndex];
};

// Do not edit below this line
module.exports = findTheOldest;

// ## Hints
// - You should return the whole person object, but
// the tests mostly just check to make sure the name
// is correct.

// - There are many ways of doing this using built-in
// array methods like `reduce`, or even chaining
// multiple!

// - One of the tests checks for people with no
// death-date.. use JavaScript's Date function to get
// their age as of today.
