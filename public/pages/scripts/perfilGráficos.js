
    // const livro = document.getElementById('chartLivro');

    //     new Chart(livro, {
    // type: 'bar',
    // data: {
    //     labels: ['O Silmarilion', 'O Hobbit', 'A Sociedade do Anel', 'As Duas Torres', 'O Retorno do Rei'],
    //     datasets: [{
    //     label: '# of Votes',
    //     data: [12, 19, 3, 5, 2],
    //     borderWidth: 1,
    //     backgroundColor: '#ffff',
    //     }]
    // },
    // options: {
    //     scales: {
    //     y: {
    //         beginAtZero: true
    //     }
    //     }
        
    // }
    // });



    // const personagem = document.getElementById('chartPersonagem');

    //     new Chart(personagem, {
    // type: 'bar',
    // data: {
    //     labels: ['Frodo', 'Sam', 'Pippin', 'Merry', 'Gandalf', 'Aragorn', 'Gimli', 'Legolas', 'Boromir'],
    //     datasets: [{
    //     label: '# of Votes',
    //     data: [12, 19, 3, 5, 2, 4, 9, 6, 3],
    //     borderWidth: 1,
    //     backgroundColor: '#ffff',
    //     }]
    // },
    // options: {
    //     scales: {
    //     y: {
    //         beginAtZero: true
    //     }
    //     }
        
    // }
    // });

    // const racas = document.getElementById('chartRacas');

    //     new Chart(racas, {
    // type: 'bar',
    // data: {
    //     labels: ['Elfos', 'Anãos', 'Humanos', 'Hobbits', 'Ents', 'Orcs'],
    //     datasets: [{
    //     label: '# of Votes',
    //     data: [12, 19, 3, 5, 2, 4],
    //     borderWidth: 1,
    //     backgroundColor: '#ffff',
    //     }]
    // },
    // options: {
    //     scales: {
    //     y: {
    //         beginAtZero: true
    //     }
    //     }
        
    // }
    // });  ${perso1}

    // window.onload = exibirDados()

    function exibirDados(perso1, perso2, perso3, perso4, perso5, perso6, perso7, perso8, perso9, livro1, livro2, livro3, livro4, livro5, raca1, raca2, raca3, raca4, raca5, raca6) {
        
        fetch(`/grafico/coleta/`, { cache: 'no-store' }).then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                    resposta.reverse();
        
                    plotarGrafico(resposta, perso1, perso2, perso3, perso4, perso5, perso6, perso7, perso8, perso9, livro1, livro2, livro3, livro4, livro5, raca1, raca2, raca3, raca4, raca5, raca6);
        
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
    }


    function plotarGrafico(resposta) {

        console.log('iniciando plotagem do gráfico...');

        // Criando estrutura para plotar gráfico - labels
        let labels = [];

        // Criando estrutura para plotar gráfico - dados
        // let dados = {
        //     labels: labels,
        //     datasets: [{
        //         label: 'livro1',
        //         data: [],
        //         fill: false,
        //         borderColor: 'rgb(75, 192, 192)',
        //         tension: 0.1
        //     },
        //     {
        //         label: 'livro2',
        //         data: [],
        //         fill: false,
        //         borderColor: 'rgb(199, 52, 52)',
        //         tension: 0.1
        //     }]
        // };

        console.log('----------------------------------------------')
        console.log('Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":')
        console.log(resposta)

        // Inserindo valores recebidos em estrutura para plotar o gráfico
        for (i = 0; i < resposta.length; i++) {
            var registro = resposta[i];
            labels.push(registro.momento_grafico);
            dados.datasets[0].data.push(registro.livro1);
            dados.datasets[1].data.push(registro.livro2);
            dados.datasets[2].data.push(registro.livro3);
            dados.datasets[3].data.push(registro.livro3);
            dados.datasets[4].data.push(registro.livro4);
            dados.datasets[5].data.push(registro.livro5);
        }

        console.log('----------------------------------------------')
        console.log('O gráfico será plotado com os respectivos valores:')
        console.log('Labels:')
        console.log(labels)
        console.log('Dados:')
        console.log(dados.datasets)
        console.log('----------------------------------------------')

        // Criando estrutura para plotar gráfico - config
        // const config = {
        //     type: 'bar',
        //     data: dados,
        // };

        // Adicionando gráfico criado em div na tela
        const livro = document.getElementById('chartLivro');

            new Chart(livro, {
        type: 'bar',
        data: {
            labels: ['O Silmarilion', 'O Hobbit', 'A Sociedade do Anel', 'As Duas Torres', 'O Retorno do Rei'],
            datasets: [{
            label: '# of Votes',
            data: [livro1, livro2, livro3, livro4, livro5],
            borderWidth: 1,
            backgroundColor: '#ffff',
            }]
        },
        options: {
            scales: {
            y: {
                beginAtZero: true
            }
            }
            
        }
        });

    }
