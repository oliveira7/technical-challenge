class NumberService {
  constructor() {}

  divider(number) {
    let dividerValues = [];
    let squareRoot = Math.sqrt(number);

    for (let i = 1; i <= squareRoot; i++) {
      if (number % i == 0) {
        if (parseInt(number / i) == i) {
          dividerValues.push(i);
        } else {
          dividerValues.push(i, parseInt(number / i));
        }
      }
    }

    return dividerValues.sort((a, b) => a - b);
  }

  prime(dividerValues) {
    let primeValues = [];

  //   const isPrime = num => {
  //     for(let i = 2, s = Math.sqrt(num); i <= s; i++)
  //         if(num % i === 0) return false; 
  //     return num > 1;
  // }

  
    const verifyPrimeNumber = (init, number) => {
      if (number === init) {
        return 0;
      } else {
        if (number % init == 0 || number === 1) {
          return 1;
        } else {
          return verifyPrimeNumber(init + 1, number);
        }
      }
    };

    dividerValues.forEach((number) => {
      if (verifyPrimeNumber(2, number) == 0) {
        primeValues.push(number);
      }
    });

    return primeValues;
  }
}

module.exports = NumberService;
