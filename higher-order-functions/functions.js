// Retorna um array apenas com os salários
const getSalaries = (employess) => employess.map((employe) => employe.salary);

// Filtro: salários que estão abaixo de 6 digitos
const isBelowSixFigures = (salary) => `${salary}`.length < 6;

// Calcular quanto eles ganham a cada mês
const calculateMonthlyPaycheck = (median) => median / 12;

// Formato em dólares (USD)
const toUSD = (value) => `$${value}`;

module.exports = {
  getSalaries,
  isBelowSixFigures,
  calculateMonthlyPaycheck,
  toUSD
}
