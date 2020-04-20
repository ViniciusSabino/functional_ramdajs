// const { upperAndReverseFirstName, upperAndReverseFirstNames } = require('./common-example')
const { upperAndReverseFirstName, upperAndReverseFirstNames } = require('./functional-example')

const bobo = {
  firstName: 'Bobo',
  lastName: 'Flakes'
};

const users = [
  {
    firstName: 'Bobo',
    lastName: 'Flakes'
  },
  {
    firstName: 'Lawrence',
    lastName: 'Shilling'
  },
  {
    firstName: 'Anon',
    lastName: 'User'
  }
];

const result = upperAndReverseFirstName(bobo);

const results = upperAndReverseFirstNames(users)

console.log({ result, results });

