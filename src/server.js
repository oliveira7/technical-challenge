const App = require("./App");
const config = require("config");

App.app.listen(config.get("api.port"), () => {
  console.log(`Api works, PORT:${config.get("api.port")}`);
});

module.exports = App.app;