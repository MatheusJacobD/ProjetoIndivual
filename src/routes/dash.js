var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.post("/receberResultados", function (req, res) {
    dashController.receberResultados(req, res);
});

module.exports = router;