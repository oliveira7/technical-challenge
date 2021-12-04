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
    let size = (dividerValues.length - 1) / 2;
    let primeValues = [];
    let marked = [];

    for (let i = 0; i < size + 1; i++) marked[i] = false;

    for (let i = 1; i <= size; i++)
      for (let j = i; i + j + 2 * i * j <= size; j++)
        marked[i + j + 2 * i * j] = true;

    for (let i = 1; i <= size; i++)
      if (marked[i] == false) primeValues.push(2 * i + 1);

    return primeValues;
  }
}

module.exports = NumberService;
