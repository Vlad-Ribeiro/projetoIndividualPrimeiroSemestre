var express = require("express")
var router = express.Router()

var graficoController = require('../controllers/graficoController')

router.get("/coleta", function(res){
    graficoController.coleta(res)
})

module.exports = router