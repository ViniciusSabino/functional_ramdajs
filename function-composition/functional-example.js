const { getFirstName, reverseString, uppercaseString } = require('./functions')

const upperAndReverseFirstName = (user) => {
  const firstName = getFirstName(user);

  const upperCase = uppercaseString(firstName);

  const reverse = reverseString(upperCase);
  
  return reverse;
};

const upperAndReverseFirstNames = (users) => users.map((user) => upperAndReverseFirstName(user));

module.exports = {
  upperAndReverseFirstName,
  upperAndReverseFirstNames
}
