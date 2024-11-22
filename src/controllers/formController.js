const { response } = require('express');
var formModel = require('../models/formModel');

function enviar(req, res) {
    var idUserForm = req.body.idUserForm;
    var personagemFav = req.body.personagemFav;
    var racaFav = req.body.racaFav;
    var descricao = req.body.descricao;
    var livroFav = req.body.livroFav;

    formModel.enviar(idUserForm, personagemFav, racaFav, descricao, livroFav).then(function(resposta){
        res.status(200).send('Arquivado com sucesso');
        
        console.log(resposta)
    }).catch(function(erro){
        res.status(500).json(erro.slqMessage);
        console.log(resposta)
    })
}

module.exports = {
    enviar
}