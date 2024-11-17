    // Seção Gráficos

    const ctx = document.getElementById('myChart');

        new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Elfos', 'Anãos', 'Humanos', 'Hobbits', 'Orcs'],
        datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
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