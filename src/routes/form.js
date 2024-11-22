var express = require("express");
var router = express.Router();

var formController = require("../controllers/formController")

router.post("/enviar", function(req, res) {
    formController.enviar(req, res)
})

module.exports = router;