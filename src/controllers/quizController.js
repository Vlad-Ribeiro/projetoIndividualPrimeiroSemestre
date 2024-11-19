var quizModel = require('../models/quizModel');

function enviar(req, res) {
    var fkUsuario = req.body.fkUsuario;
    var fkQuiz = req.body.fkQuiz;
    var qtdAcertos = req.body.qtdAcertos;

    quizModel.enviar(fkUsuario, fkQuiz, qtdAcertos).then(function(resposta){
        res.status(200).send('Arquivado com sucesso');
    }).catch(function(erro){
        res.status(500).json(erro.slqMessage);
    })
}

module.exports = {
    enviar
}