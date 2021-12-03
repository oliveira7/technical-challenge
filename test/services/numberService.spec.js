const NumberService = require("../../src/services/NumberService");
const NumberServiceInstance = new NumberService();

const dividerResponse = [
  1, 3, 5, 7, 13, 15, 19, 21, 35, 37, 39, 57, 65, 91, 95, 105, 111, 133, 185,
  195, 247, 259, 273, 285, 399, 455, 481, 555, 665, 703, 741, 777, 1235, 1295,
  1365, 1443, 1729, 1995, 2109, 2405, 3367, 3515, 3705, 3885, 4921, 5187, 7215,
  8645, 9139, 10101, 10545, 14763, 16835, 24605, 25935, 27417, 45695, 50505,
  63973, 73815, 137085, 191919, 319865, 959595,
];
const primeResponse = [
  3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61,
];

describe("numberService", () => {
  it("Success in catching all dividers", () => {
    const response = NumberServiceInstance.divider(959595);

    expect(response).toEqual(dividerResponse);
  });

  it("Success in getting all the number 1 divisors", () => {
    const response = NumberServiceInstance.divider(1);

    expect(response).toEqual([1]);
  });

  it("Success in defining the prime numbers of divisors", () => {
    const response = NumberServiceInstance.prime(dividerResponse);

    expect(response).toEqual(primeResponse);
  });
});
