const NumberService = require("../services/NumberService");
const NumberServiceInstance = new NumberService();

module.exports = {
  async index(req, res, next) {
    try {
      const { number } = req.query;
     
      const dividerValues = await NumberServiceInstance.divider(number);
      const primeValues = await NumberServiceInstance.prime(dividerValues);

      res
        .status(200)
        .send({ number: number, divisors: dividerValues, primes: primeValues });
    } catch (err) {
      return res.status(err.statusCode).json({
        message: err.name,
      });
    }
  },
};
