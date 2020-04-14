const upperAndReverseFirstName = (user) => {
  const upper = user.firstName.toUpperCase();

  return [...upper].reduce((acc, item) => {
    return item + acc
  }, '');
};

const upperAndReverseFirstNames = (users) => {
  return users.map((user) => {
    const upper = user.firstName.toUpperCase();

    return [...upper].reduce((acc, item) => {
      return item + acc;
    });
  })
};

module.exports = {
  upperAndReverseFirstName,
  upperAndReverseFirstNames
}
