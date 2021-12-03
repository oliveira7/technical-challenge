const NumberService = require("../../src/services/NumberService");
const NumberServiceInstance = new NumberService();

const dividerResponse = [1, 3, 5, 9, 15, 45];
const primeResponse = [3, 5];

describe("numberService", () => {
  it("divider success", () => {
    const response = NumberServiceInstance.divider(45);

    expect(response).toEqual(dividerResponse);
  });
  
  it("prime success", () => {
    const response = NumberServiceInstance.prime(dividerResponse);

    expect(response).toEqual(primeResponse);
  });
});
