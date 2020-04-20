const { add, reduce } = require('ramda');

// sum is NOT point-free... => soma NÃO é isenta de pontos
// nums parameter is showing  => o parâmetoro nums está sendo exibido
const sum = (nums) => nums.reduce((acc, item) => acc + item, 0);


// sum is point-free => soma é sem pontos
const sum2 = reduce(add, 0);

// This is okay too, => Tudo bem também
// But inner function (x,y) => {} isn't point-free => mas a função interna (x,y) => {} não é livre de pontos
const sum3 = reduce((acc, item) => acc + item, 0);

console.log(sum([1, 2, 3, 4])) // 10
console.log(sum2([1, 2, 3, 4])) // 10
console.log(sum3([1, 2, 3, 4])) // 10
