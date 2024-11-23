var livroModel = require("../models/livroModel")

async function coletaLivro(req, res) {
    
    var dataLivro = []
    var promessas = []
    
    for (i = 1; i <= 5; i++) {
        promessas.push(
            livroModel.coletaLivro(i).then(function(resultado) {
                if (resultado.length > 0) {
                    dataLivro.push(resultado)

                    return resultado[0].Livro
                } else {
                    dataLivro.push(0)
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
    coletaLivro
}