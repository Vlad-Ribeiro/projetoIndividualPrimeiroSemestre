var database = require('../database/config')

function coletaPersonagem(personagemFav) {

    var comandoSql = `select (sum(personagemFav)/personagemFav) as 'Personagem' from formulario where personagemFav = ${personagemFav} group by personagemFav;`

    return database.executar(comandoSql)
}

module.exports = {
    coletaPersonagem
}