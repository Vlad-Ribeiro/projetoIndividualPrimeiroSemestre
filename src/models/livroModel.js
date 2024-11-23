var database = require("../database/config")

function coletaLivro(livroFav) {

    var comandoSql = `select (sum(livroFav)/livroFav) as 'Livro' from formulario where livroFav = ${livroFav} group by livroFav`

    return database.executar(comandoSql)
}

module.exports = {
    coletaLivro
}