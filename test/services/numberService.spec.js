const NumberService = require("../../src/services/NumberService");
const NumberServiceInstance = new NumberService();

const dividerResponse = [1, 3, 5, 9, 15, 45];
const primeResponse = [3, 5];

describe("numberService", () => {
  it("Success in catching all dividers", () => {
    const response = NumberServiceInstance.divider(45);

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
