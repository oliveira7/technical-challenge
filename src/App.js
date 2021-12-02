const express = require("express");
const cors = require("cors");

const numberRouter = require("./routes/numberRouter");

class App {
  app = express.application;

  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  enableCors() {
    const options = {
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      preflightContinue: false,
      optionsSuccessStatus: 204,
    };

    this.app.use(cors(options));
  }

  middleware() {
    this.enableCors();
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/", numberRouter);
  }
}

module.exports = new App();