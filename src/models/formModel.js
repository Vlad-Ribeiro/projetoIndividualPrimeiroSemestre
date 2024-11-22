var database = require("../database/config")

function enviar(idUserForm, personagemFav, racaFav, livroFav, descricao) {
    var instrucao = `
        insert into formulario (idUserForm, personagemFav,  racaFav, livroFav, descricao) values
        (${idUserForm}, '${personagemFav}', '${racaFav}', '${livroFav}', '${descricao}');
    `;

    return database.executar(instrucao)
}

module.exports = {
    enviar
}