var database = require('../database/config');

function coleta() {

    var perso1 = `select sum(personagemFav)/personagemFav from formulario where personagemFav = 1 group by personagemFav;`
    var perso2 = `select sum(personagemFav)/personagemFav from formulario where personagemFav = 2 group by personagemFav;`
    var perso3 = `select sum(personagemFav)/personagemFav from formulario where personagemFav = 3 group by personagemFav;`
    var perso4 = `select sum(personagemFav)/personagemFav from formulario where personagemFav = 4 group by personagemFav;`
    var perso5 = `select sum(personagemFav)/personagemFav from formulario where personagemFav = 5 group by personagemFav;`
    var perso6 = `select sum(personagemFav)/personagemFav from formulario where personagemFav = 6 group by personagemFav;`
    var perso7 = `select sum(personagemFav)/personagemFav from formulario where personagemFav = 7 group by personagemFav;`
    var perso8 = `select sum(personagemFav)/personagemFav from formulario where personagemFav = 8 group by personagemFav;`
    var perso9 = `select sum(personagemFav)/personagemFav from formulario where personagemFav = 9 group by personagemFav;`

    var livro1 = `select sum(livroFav)/livroFav from formulario where livroFav = 1 group by livroFav;`
    var livro2 = `select sum(livroFav)/livroFav from formulario where livroFav = 2 group by livroFav;`
    var livro3 = `select sum(livroFav)/livroFav from formulario where livroFav = 3 group by livroFav;`
    var livro4 = `select sum(livroFav)/livroFav from formulario where livroFav = 4 group by livroFav;`
    var livro5 = `select sum(livroFav)/livroFav from formulario where livroFav = 5 group by livroFav;`

    var raca1 = `select sum(racaFav)/racaFav from formulario where racaFav = 1 group by racaFav;`
    var raca2 = `select sum(racaFav)/racaFav from formulario where racaFav = 2 group by racaFav;`
    var raca3 = `select sum(racaFav)/racaFav from formulario where racaFav = 3 group by racaFav;`
    var raca4 = `select sum(racaFav)/racaFav from formulario where racaFav = 4 group by racaFav;`
    var raca5 = `select sum(racaFav)/racaFav from formulario where racaFav = 5 group by racaFav;`
    var raca6 = `select sum(racaFav)/racaFav from formulario where racaFav = 6 group by racaFav;`

    return database.executar(perso1, perso2, perso3, perso4, perso5, perso6, perso7, perso8, perso9, livro1, livro2, livro3, livro4, livro5, raca1, raca2, raca3, raca4, raca5, raca6)
}

module.exports = {
    coleta
}

