var database = require('../database/config')

function coletaRaca (racaFav) {

    var comandoSql = `select (sum(racaFav)/racaFav) as 'Raca' from formulario where racaFav = ${racaFav} group by racaFav`

    return database.executar(comandoSql)
}

module.exports = {
    coletaRaca
}