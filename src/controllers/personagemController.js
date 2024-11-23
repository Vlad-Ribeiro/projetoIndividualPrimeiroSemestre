var personagemModel = require("../models/personagemModel")

async function coletaPersonagem(req, res) {

    var dataPersonagem = []
    var promessas = []

    for (i = 1; i <= 9; i++) {
        promessas.push(personagemModel.coletaPersonagem(i)
        .then(function(resultado) {
            if (resultado.length > 0) {
                dataPersonagem.push(resultado)
    
                return resultado[0].Personagem
            } else {
                dataPersonagem.push(0)
                return 0
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }))
    }

    var resultados = await Promise.all(promessas)

    res.json(resultados)
}

module.exports = {
    coletaPersonagem
}