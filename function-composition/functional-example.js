const R = require('ramda')
const { getFirstName, reverseString, uppercaseString } = require('./functions')

const upperAndReverseFirstName = (user) => {
  const firstName = getFirstName(user);

  const upperCase = uppercaseString(firstName);

  const reverse = reverseString(upperCase);
  
  return reverse;
};

const upperAndReverseFirstNames = (users) => users.map((user) => upperAndReverseFirstName(user));

// Adding Ramda

const upperAndReverseFirstNameR = R.pipe(
  getFirstName,
  uppercaseString,
  reverseString
)

const upperAndReverseFirstNamesR = R.map(upperAndReverseFirstNameR)

module.exports = {
  upperAndReverseFirstName,
  upperAndReverseFirstNames,
  
  upperAndReverseFirstNamesR,
  upperAndReverseFirstNameR
}
