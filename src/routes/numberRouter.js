const router = require("express").Router();
const numberController = require("../controllers/numberController");

router.get("/numbers", numberController.index);

module.exports = router;