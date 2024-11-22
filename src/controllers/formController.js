var formModel = require('../models/formModel');

function enviar(req, res) {
    var idUserForm = req.body.idUserForm;
    var personagemFav = req.body.personagemFav;
    var racaFav = req.body.racaFav;
    var descricao = req.body.descricao;
    var livroFav = req.body.livroFav;

    formModel.enviar(idUserForm, personagemFav, racaFav, descricao, livroFav).then(function(resultado){
        res.status(200).send('Arquivado com sucesso');
        res.json(resultado)
        
    }).catch(function(erro){
        res.status(500).json(erro.slqMessage);
        console.log(erro)
    })
}

module.exports = {
    enviar
}