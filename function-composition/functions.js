const getFirstName = (user) => user.firstName;

const uppercaseString = (string) => string.toUpperCase();

const reverseString = (string) => 
  string.split('')
    .reverse()
    .join('');

module.exports = {
  getFirstName,
  uppercaseString,
  reverseString
}
