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

const shouldCodePointFree = R.ifElse(R.where({
  lovesTech: 
}))
