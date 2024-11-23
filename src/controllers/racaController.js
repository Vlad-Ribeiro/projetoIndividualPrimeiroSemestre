var racaModel = require("../models/racaModel")

async function coletaRaca(req, res) {
    
    var dataRaca = []
    var promessas = []

    for (i = 1; i <= 6; i++) {
        promessas.push (
            racaModel.coletaRaca(i).then(function(resultado){
                if (resultado.length > 0) {
                    dataRaca.push(resultado)
                    return resultado[0].Raca
                } else {
                    dataRaca.push(0)
                    return 0
                }
            }).catch(function(erro) {
                console.log(erro)
                console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            })
        )
    }

    var resultados = await Promise.all(promessas)
    res.json(resultados)
}

module.exports = {
    coletaRaca
}