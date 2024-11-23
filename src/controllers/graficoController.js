var graficoModel = require("../models/graficoModel")

function coleta(res) {
    
    // var perso1 = req.params.perso1;
    // var perso2 = req.params.perso2;
    // var perso3 = req.params.perso3;
    // var perso4 = req.params.perso4;
    // var perso5 = req.params.perso5;
    // var perso6 = req.params.perso6;
    // var perso7 = req.params.perso7;
    // var perso8 = req.params.perso8;
    // var perso9 = req.params.perso9;

    // var livro1 = req.params.livro1;
    // var livro2 = req.params.livro2;
    // var livro3 = req.params.livro3;
    // var livro4 = req.params.livro4;
    // var livro5 = req.params.livro5;

    // var raca1 = req.params.raca1;
    // var raca2 = req.params.raca2;
    // var raca3 = req.params.raca3;
    // var raca4 = req.params.raca4;
    // var raca5 = req.params.raca5;
    // var raca6 = req.params.raca6;


    graficoModel.coleta(personagemFav)
    .then(function(resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    coleta
}