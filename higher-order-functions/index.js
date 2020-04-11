const { pipe, reject, median } = require('ramda')

const employees = require('./employess.json')
const { 
  getSalaries, 
  isBelowSixFigures, 
  calculateMonthlyPaycheck, 
  toUSD 
} = require('./functions')

const getMedianSixFigurePaycheck = pipe(
  getSalaries,
  reject(isBelowSixFigures),
  median,
  calculateMonthlyPaycheck,
  toUSD
);

const result = getMedianSixFigurePaycheck(employees);

console.log({ result }); // { result: '$50,725.21' }


// R.pipe =>  (((a, b, …, n) → o), (o → p), …, (x → y), (y → z)) → ((a, b, …, n) → z)
// Executa a composição da função da esquerda para a direita. O primeiro argumento pode ter 
// N parametros, as funções seguintes devem receber apenas um parametro


// R.reject => Filterable f => (a → Boolean) → f a → f a

// R.median => [Number] => Number
// Retorna a mediana da lista de números fornecida
