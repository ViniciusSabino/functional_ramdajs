// const { upperAndReverseFirstName, upperAndReverseFirstNames } = require('./common-example')
const { 
  upperAndReverseFirstName, 
  upperAndReverseFirstNames, 
  upperAndReverseFirstNameR, 
  upperAndReverseFirstNamesR } = require('./functional-example')

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

const results = upperAndReverseFirstNames(users);

const resultR = upperAndReverseFirstNameR(bobo);

const resultsR = upperAndReverseFirstNamesR(users)

console.log({ result, results, resultR, resultsR });

