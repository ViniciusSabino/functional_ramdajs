// Ex 1 - Este código informa se uma determinada frase contém "Bobo", independentemente do caso.
// Refatorar para não precisar de pontos 

// Antes -> const countBobos = (sentence) => /bobo/ig.test(sentence);

const R = require('ramda')

const countBobos = R.test(/bobo/ig);

// Ex 2 - Este código informa se alguém deve considerar uma carreira tecnologica. Refatorar 
// para não precisar de pontos

const shouldCode = (person) => (
  person.lovesTech && person.worksHard ?
    `${person.name} may enjoy a tech career!` :
    `${person.name} wouldn't enjoy a tech career.`
);


// Mesmo que as duas funções internas mostram o parametro, shouldCode() em si 
// ainda é point free.
// Cada função é julgada independentemente a partir de outras.    
const shouldCodeFunc = R.ifElse(
  R.where({
    lovesTech: R.equals(true),
    worksHard: R.equals(true),
  }),
  (person) => `${person.name} may enjoy a tech career!`,
  (person) => `${person.name} would't enjoy a tech career.`
)


console.log(shouldCode({lovesTech: true, worksHard: true, name: 'Vinícius' }))
// Vinícius may enjoy a tech career!

console.log(shouldCodeFunc({lovesTech: true, worksHard: true, name: 'Vinícius' }))
// Vinícius may enjoy a tech career!

// Ex 3 - Este código retorna todos age. Refatorar para não precisar de pontos
const peoples = [
  {name: 'Vinícius', age: 24},
  {name: 'Rayza', age: 5},
  {name: 'Mariazinha', age: 44 }
];

const getAges = (peoples) => peoples.map((person) => person.age);

const getAgesFunc1 = R.map(R.prop('age'))

console.log(getAgesFunc1(peoples)) // [24, 5, 44]

// Este exemplo também funciona
const getAgesFunc2 = R.pluck('age');

console.log(getAgesFunc2(peoples)) // [24 ,5, 44]

// Ex 4 - Este código rejeita todos os menores de 18 anos e mais de 25 anos.
// Refatorar para não precisar de pontos

const keepYoungAdults = (peoples) => peoples.filter((p) => (p.age >= 18 && p.age <= 25));

const predicate = R.propSatisfies((age) => age >= 18 && age <= 25, 'age')
const keepYoungAdultsFunc = R.filter(predicate);

console.log(keepYoungAdultsFunc(peoples)) // [ { name: 'Vinícius', age: 24 } ]

// Outro modo de fazer

const youngAdultAge = R.both(R.gte(18), R.lte(25));
const isYoungAdult = R.propSatisfies(youngAdultAge, 'age')
const keepYoungAdultsFunc2 = R.filter(isYoungAdult)

// Você também pode aplicar a lógica oposta com reject()

const notYoungAdultAge = R.either(R.gt(18), R.lt(25))
const isNotYoungAdul = R.propSatisfies(notYoungAdultAge, 'age')
const keepYoungAdultsFunc3 = R.reject(isNotYoungAdul); 

// Ex 5 - Crie uma função chamada defaultTo. São necessários dois parâmetros:
/*
- defaultVal: Um valor padrão
- val: O valor a retornar

Se val for null ou undefined, retorne defaultVal
Senão, volte val

Faça curry para permitir argumentos de pré-carregamento
*/

// Exemplo
const defaultToBobo = R.defaultTo('Bobo');

defaultToBobo(null) // Bobo
defaultToBobo('Patrick') // Patrick

const defaultToFun = (defaultVal, val) => (val && typeof val === 'string') ? val : defaultVal;

const defaultTo = R.curry(defaultToFun);

console.log(defaultTo('Vinícius', {}))

