class NumberService {
  constructor() {}

  divider(number) {
    let dividerValues = [];

    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        dividerValues.push(i);
      }
    }

    return dividerValues;
  }

  prime(dividerValues) {
    let primeValues = [];

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

    return primeValues;
  }
}

module.exports = NumberService;
