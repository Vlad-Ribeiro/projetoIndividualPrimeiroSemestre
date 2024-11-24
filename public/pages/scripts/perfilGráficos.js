    // Gráfico Personagens:
    
    function dadosGraficoPersonagem() {

        fetch(`/personagem/coletaPersonagem`, { cache: 'no-store' }).then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                    plotarPersonagens(resposta);
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
            .catch(function (error) {
                console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
            });
    }

    function plotarPersonagens(resposta) {

        console.log('iniciando plotagem do gráfico...');

        let labels = ['Frodo', 'Sam', 'Pippin', 'Merry', 'Gandalf', 'Aragorn', 'Gimli', 'Legolas', 'Boromir'];

        let dados = {
            labels: labels,
            datasets: [{
                label: 'personagens',
                data: resposta,
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
                tension: 1,
                backgroundColor: 'rgba(255, 255, 255)',
            },
            ]
        };

        console.log('----------------------------------------------')
        console.log('Estes dados foram recebidos pela funcao "dadosGraficoPersonagem" e passados para "plotarPersonagens":')
        console.log(resposta)

        console.log('----------------------------------------------')
        console.log('O gráfico será plotado com os respectivos valores:')
        console.log('Labels:')
        console.log(labels)
        console.log('Dados:')
        console.log(dados.datasets)
        console.log('----------------------------------------------')

        const config = {
            type: 'bar',
            data: dados
        };
        
        new Chart(
            document.getElementById(`chartPersonagem`),
            config
        );


        var maisPopular = document.getElementById('personagemMaisPopular')
        var menosPopular = document.getElementById('personagemMenosPopular')

        var maior = -1
        var menor = 999999999999999999999999999999999
        var totalResposta = 0

        for (i = 0; i < resposta.length; i++) {
            
            var respostaNum = Number(resposta[i])
            totalResposta += respostaNum

            if (respostaNum > maior) {
                maior = respostaNum
            }

            if (respostaNum < menor) {
                menor = respostaNum
            }
        }

        var contaMaisPopular = maior/totalResposta * 100
        var contaMenosPopular = menor/totalResposta * 100
        
        maisPopular.innerHTML = `+ Popular: ${contaMaisPopular}%`
        menosPopular.innerHTML = `- Popular: ${contaMenosPopular}%`
    }


    // Gráfico Livros:

    function dadosGraficoLivro() {

        fetch(`/livro/coletaLivro`, { cache: 'no-store' }).then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                    plotarLivros(resposta);
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
            .catch(function (error) {
                console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
            });
    }

    function plotarLivros(resposta) {

        console.log('iniciando plotagem do gráfico...');

        let labels = ['O Silmarillion', 'O Hobbit', 'A Sociedade do Anel', 'As Duas Torres', 'O Retorno do Rei'];

        let dados = {
            labels: labels,
            datasets: [{
                label: 'Livros',
                data: resposta,
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
                tension: 1,
                backgroundColor: 'rgba(255, 255, 255)',
            },
            ]
        };

        console.log('----------------------------------------------')
        console.log('Estes dados foram recebidos pela funcao "dadosGraficoLivro" e passados para "plotarLivros":')
        console.log(resposta)

        console.log('----------------------------------------------')
        console.log('O gráfico será plotado com os respectivos valores:')
        console.log('Labels:')
        console.log(labels)
        console.log('Dados:')
        console.log(dados.datasets)
        console.log('----------------------------------------------')

        const config = {
            type: 'bar',
            data: dados
        };
        
        new Chart(
            document.getElementById(`chartLivro`),
            config
        );


        var maisPopular = document.getElementById('livroMaisPopular')
        var menosPopular = document.getElementById('livroMenosPopular')

        var maior = -1
        var menor = 999999999999999999999999999999999
        var totalResposta = 0

        for (i = 0; i < resposta.length; i++) {
            
            var respostaNum = Number(resposta[i])
            totalResposta += respostaNum

            if (respostaNum > maior) {
                maior = respostaNum
            }

            if (respostaNum < menor) {
                menor = respostaNum
            }
        }

        var contaMaisPopular = maior/totalResposta * 100
        var contaMenosPopular = menor/totalResposta * 100
        
        maisPopular.innerHTML = `+ Popular: ${contaMaisPopular}%`
        menosPopular.innerHTML = `- Popular: ${contaMenosPopular}%`
    }

    
    // Gráfico Raças:

    function dadosGraficoRaca() {

        fetch(`/livro/coletaLivro`, { cache: 'no-store' }).then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                    plotarRacas(resposta);
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
            .catch(function (error) {
                console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
            });
    }

    function plotarRacas(resposta) {

        console.log('iniciando plotagem do gráfico...');

        let labels = ['Elfos', 'Anãos', 'Humanos', 'Hobbits', 'Ents', 'Orcs'];

        let dados = {
            labels: labels,
            datasets: [{
                label: 'Livros',
                data: resposta,
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
                tension: 1,
                backgroundColor: 'rgba(255, 255, 255)',
            },
            ]
        };

        console.log('----------------------------------------------')
        console.log('Estes dados foram recebidos pela funcao "dadosGraficoRaca" e passados para "plotarRacas":')
        console.log(resposta)

        console.log('----------------------------------------------')
        console.log('O gráfico será plotado com os respectivos valores:')
        console.log('Labels:')
        console.log(labels)
        console.log('Dados:')
        console.log(dados.datasets)
        console.log('----------------------------------------------')

        const config = {
            type: 'bar',
            data: dados
        };
        
        new Chart(
            document.getElementById(`chartRacas`),
            config
        );


        var maisPopular = document.getElementById('racaMaisPopular')
        var menosPopular = document.getElementById('racaMenosPopular')

        var maior = -1
        var menor = 999999999999999999999999999999999
        var totalResposta = 0

        for (i = 0; i < resposta.length; i++) {
            
            var respostaNum = Number(resposta[i])
            totalResposta += respostaNum

            if (respostaNum > maior) {
                maior = respostaNum
            }

            if (respostaNum < menor) {
                menor = respostaNum
            }
        }

        var contaMaisPopular = maior/totalResposta * 100
        var contaMenosPopular = menor/totalResposta * 100
        
        maisPopular.innerHTML = `+ Popular: ${contaMaisPopular}%`
        menosPopular.innerHTML = `- Popular: ${contaMenosPopular}%`
    }