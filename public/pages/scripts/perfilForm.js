function enviar() {
    var personagem = slcPersonagem.value
    var raca = slcRaca.value
    var livro = slcLivro.value
    var txtDescricao = iptDescricao.value
    
    fetch("/form/enviar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idUserForm: sessionStorage.ID_USUARIO,
            personagemFav: personagem,
            racaFav: raca,
            livroFav: livro,
            descricao: txtDescricao
        }),
    }). then(function(resposta) {
        console.log("resposta: ", resposta);
        if(resposta.ok) {
            divStatus.innerHTML = `Resposta enviada! *Está página será recarregada*`
            setTimeout(() => {
                window.location.reload()
            }, "3000");
        } else {
            divStatus.innerHTML = `Algo deu errado :(`
        }
    })
}