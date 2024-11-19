var database = require("../database/config")

function enviar(fkUsuario, fkQuiz, qtdAcertos) {
    var instrucao = `
        insert into resultados (fkUsuario, fkQuiz, qtdAcertos) values
        ('${fkUsuario}', '${fkQuiz}', '${qtdAcertos}');
    `;

    return database.executar(instrucao)
}