const R = require('ramda');

const greet = (greeting, first, last) => `${greeting}, ${first} ${last}`;
const curriedGreet = R.curry(greet);

// Fornece todos os argumentos de uma vez
const result1 = curriedGreet('Olá', 'Vinícius', 'Rocha');

// Ou quebre 
const result2 = curriedGreet('Olá')('Taciana')('Silva');

// Armaena a função ao curry como variável
const olaRayza = curriedGreet('Olá', 'Rayza')
const result3 = olaRayza('Sabino')

console.log({
  result1,
  result2,
  result3
})
