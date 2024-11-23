var express = require("express")
var router = express.Router()

var personagemController = require('../controllers/personagemController')

router.get("/coletaPersonagem", function(req, res){
    personagemController.coletaPersonagem(req, res)
})

module.exports = router