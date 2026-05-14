function obterDadosGrafico() {
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
            let porc = dados.usuariosResponderam[0].usuariosResponderam / dados.totalUsuarios[0].totalUsuarios * 100;
            porc = porc.toFixed(0);
            document.getElementById('porcenQuest').textContent = `${porc}%`;

            document.getElementById('qtdAg').textContent = dados.estilos[1].quantidade;
            document.getElementById('qtdFc').textContent = dados.estilos[2].quantidade;
            document.getElementById('qtdEs').textContent = dados.estilos[0].quantidade;
            document.getElementById('gmCm').textContent = dados.gmMaisRecebido[0].gmMaisRecebido;
            document.getElementById('abCm').textContent = dados.aberturaMaisRecebida[0].aberturaMaisRecebida;

            let aberturas = dados.aberturas;

            let nomes = [];
            let valores = [];
            let rankLista = [];
            let gms = [];
            let qtds = [];

            for (let i = 0; i < dados.ranking.length; i++) {
                rankLista.push([i + 1, dados.ranking[i].nome, dados.ranking[i].estilo, dados.ranking[i].gm, dados.ranking[i].abertura]);
            }

            for (let i = 0; i < aberturas.length; i++) {
                nomes.push(aberturas[i].abertura);
                valores.push(aberturas[i].quantidade);
            }

            for (let i = 0; i < dados.gms.length; i++) {
                gms.push(dados.gms[i].gm);
                qtds.push(dados.gms[i].quantidade);
            }

            criarGraficoPizza(nomes, valores);
            criarGraficoBarra(gms, qtds);

            if (dados.aberturaMaisRecebida[0].id >= 1 && dados.aberturaMaisRecebida[0].id <= 5) {
                document.getElementById('abCm').style.color = '#CC2E31';
            } else if (dados.aberturaMaisRecebida[0].id > 5 && dados.aberturaMaisRecebida[0].id <= 10) {
                document.getElementById('abCm').style.color = '#27AE60';
            } else {
                document.getElementById('abCm').style.color = '#2E5BCC';
            }

            let html = "";
            let exec = false;

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
                    ${!exec ? `                    
                        <div class="rankLinhas" id="rankTitle">
                            Lista de Usuários
                        </div>` : ``}
                    <div class="rankText">
                        <div class="rankTop">
                            <div class='rankListaId'>${rankLista[i][0]}</div>

                            <div class="rankInfo">
                                <a style="color: ${cor};">${rankLista[i][1]}</a> | 
                                ${rankLista[i][3]}
                            </div>
                        </div>

                        <div class='rankListaAberturaContainer'>
                            <div class='rankListaAbertura' style="background-color: ${cor};">
                                ${rankLista[i][4]}
                            </div>
                        </div>
                    </div>
            `;
            exec = true;
            }

            document.getElementById('rank').innerHTML = html;
            setTimeout(obterDadosGrafico, 10000);
        });
}

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
            animation: false,
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
obterDadosGrafico();