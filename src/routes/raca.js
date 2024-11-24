var express = require("express")
var router = express.Router()

var racaController = require('../controllers/racaController')

router.get("/coletaRaca", function(req, res){
    racaController.coletaRaca(req, res)
})

module.exports = router