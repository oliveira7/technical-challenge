const App = require("../../src/App");
const request = require("supertest");

describe("numberController", () => {
  it("Get /numbers request flow success", async () => {
    const response = await request(App.app)
      .get("/numbers")
      .query({ number: 45 });

    expect(response.body).toHaveProperty("number");
    expect(response.body).toHaveProperty("divisors");
    expect(response.body).toHaveProperty("primes");
    expect(response.status).toBe(200);
  });

  it("Get /numbers request flow failure", async () => {
    const response = await request(App.app)
      .get("/numbers")
      .query({ number: "qualquerstring" });

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(400);
  });
});
