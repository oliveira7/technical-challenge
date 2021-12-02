let number = 45;
let dividerValues = [];
let primeValues = [];

for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    dividerValues.push(i);
  }
}

function verifyPrimeNumber(init, number) {
  if (number === init) {
    return 0;
  } else {
    if (number % init == 0 || number === 1) {
      return 1;
    } else {
      return verifyPrimeNumber(init + 1, number);
    }
  }
}

dividerValues.forEach((number) => {
  if (verifyPrimeNumber(2, number) == 0) {
    primeValues.push(number);
  }
});

console.log(`Número de Entrada: ${number}`);
console.log(`Números divisores ${dividerValues}`);
console.log(`Divisores Primos: ${primeValues}`);


// const calc = (value, total) => total === 0 ? value : calc(total, value % total);

// calc(10, 15);
