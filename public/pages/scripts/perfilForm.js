function enviar() {
    var personagem = Number(slcPersonagem.value)
    var raca = Number(slcRaca.value)
    var livro = Number(slcLivro.value)
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
            divStatus.innerHTML = `Você já respondeu esse formulário.`

            setTimeout(() => {
                divStatus.innerHTML = ``
            }, "3000");
        }
    })
}