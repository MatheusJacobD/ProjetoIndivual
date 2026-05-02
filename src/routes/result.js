var express = require("express");
var router = express.Router();

var resultController = require("../controllers/resultController");

router.post("/exibirResultado", function (req, res) {
    resultController.exibirResultado(req, res);
});

module.exports = router;