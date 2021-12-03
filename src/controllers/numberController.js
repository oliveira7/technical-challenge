const NumberService = require("../services/NumberService");
const NumberServiceInstance = new NumberService();

module.exports = {
  async index(req, res, next) {
    try {
      const { number } = req.query;
      const regexNumber =  new RegExp('^[0-9]+$');
  
      if (!regexNumber.test(number)) {
        throw new Error("Número inválido!");
      }

      const dividerValues = await NumberServiceInstance.divider(number);
      const primeValues = await NumberServiceInstance.prime(dividerValues);

      res
        .status(200)
        .send({ number: number, divisors: dividerValues, primes: primeValues });
    } catch (err) {
      return res.status(400).json({
        message: err.message,
      });
    }
  },
};
