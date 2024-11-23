var express = require("express")
var router = express.Router()

var livroController = require('../controllers/livroController')

router.get("/coletaLivro", function(req, res){
    livroController.coletaPersonagem(req, res)
})

module.exports = router