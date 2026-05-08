fetch("/dash/receberResultados", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    }
})
    .then(function (resposta) {
        return resposta.json();
    })
    .then(function (dados) {
        console.log(dados);

        let porc = dados[1][0].usuariosResponderam / dados[0][0].totalUsuarios * 100;
        porc = porc.toFixed(0);

        document.getElementById('total').textContent = dados[0][0].totalUsuarios;
        document.getElementById('porcenQuest').textContent = porc;
        document.getElementById('qtdAg').textContent = dados[2][1].quantidade;
        document.getElementById('qtdFc').textContent = dados[2][2].quantidade;
        document.getElementById('qtdEs').textContent = dados[2][0].quantidade;
        document.getElementById('gmCm').textContent = dados[3][0].gmMaisRecebido;
        document.getElementById('abCm').textContent = dados[4][0].aberturaMaisRecebida;

        let aberturas = dados[5];

        let nomes = [];
        let valores = [];
        let rankLista = [];
        let gms = [];
        let qtds = [];

        for (let i = 0; i < dados[7].length; i++) {
            rankLista.push([i+1, dados[7][i].nome,
            dados[7][i].estilo, dados[7][i].gm, dados[7][i].abertura]);
        }

        for (let i = 0; i < aberturas.length; i++) {
            nomes.push(aberturas[i].abertura);
            valores.push(aberturas[i].quantidade);
        }

        for (let i = 0; i < dados[6].length; i++) {
            gms.push(dados[6][i].gm);
            qtds.push(dados[6][i].quantidade);
        }

        criarGraficoPizza(nomes, valores);
        criarGraficoBarra(gms, qtds);

        if (dados[4][0].id >= 1 && dados[4][0].id <= 5) {
            document.getElementById('abCm').style.color = '#CC2E31';
        } else if (dados[4][0].id > 5 && dados[4][0].id <= 10) {
            document.getElementById('abCm').style.color = '#27AE60';
        } else {
            document.getElementById('abCm').style.color = '#2E5BCC';
        }

        let html = "";
        console.log(rankLista[0]);

        for (let i = 0; i < rankLista.length; i++) {
            let cor = rankLista[i][2];
            if (cor == 'Agressivo') {
                cor = '#CC2E31';
            } else if (cor == 'Estrategista') {
                cor = '#27AE60';
            } else {
                cor = '#2E5BCC';
            }

            html += `
                    <div class="rankLinhas">
                        <span class="rankText">${rankLista[i][0]}. <a style="color: ${cor};">${rankLista[i][1]}</a> | 
                        ${rankLista[i][3]}<br>${rankLista[i][4]}</span>
                    </div>
            `;
        }

        document.getElementById('rank').innerHTML += html;


    });

let graficoPizza = null;

function criarGraficoPizza(nomes, valores) {

    if (graficoPizza != null) {
        graficoPizza.destroy();
    }

    graficoPizza = new Chart(document.getElementById("graficoPizza").getContext("2d"), {
        type: "pie",
        data: {
            labels: nomes,
            datasets: [{
                data: valores,
                backgroundColor: [
                    "#1C7341",
                    "#ED1D60",
                    "#18B094",
                    "#6A2CA5"
                ]
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Aberturas Mais Utilizadas',
                    color: 'white',
                    font: {
                        size: 20
                    }
                },
                legend: {
                    position: 'bottom',
                    align: 'center',

                    labels: {
                        color: 'white',
                        padding: 20,
                        boxWidth: 18,
                        boxHeight: 18
                    }
                }
            }
        }
    });

}

let graficoBarra = null;

function criarGraficoBarra(nomes, valores) {

    if (graficoBarra != null) {
        graficoBarra.destroy();
    }

    graficoBarra = new Chart(document.getElementById("graficoBarra"), {
        type: "bar",

        data: {
            labels: nomes,

            datasets: [{
                label: "Pontuação",
                data: valores,

                backgroundColor: [
                    "#1C7341",
                    "#ED1D60",
                    "#18B094",
                    "#6A2CA5"
                ],

                borderWidth: 1
            }]
        },

        options: {
            responsive: true,

            plugins: {
                title: {
                    display: true,
                    text: 'GMs Mais Relacionados',
                    color: 'white',

                    font: {
                        size: 20
                    }
                },

                legend: {
                    display: true,

                    labels: {
                        color: 'white'
                    }
                }
            },

            scales: {
                x: {
                    ticks: {
                        color: 'white'
                    },

                    grid: {
                        color: '#444'
                    }
                },

                y: {
                    beginAtZero: true,

                    ticks: {
                        color: 'white',
                        stepSize: 1
                    },

                    grid: {
                        color: '#444'
                    }
                }
            }
        }
    });
}

criarGraficoBarra();
criarGraficoPizza();