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

        for (let i = 0; i < aberturas.length; i++) {
            nomes.push(aberturas[i].abertura);
            valores.push(aberturas[i].quantidade);
        }

        criarGrafico(nomes, valores);

        if (dados[4][0].id >= 1 && dados[4][0].id <= 5) {
            document.getElementById('abCm').style.color = '#CC2E31';
        } else if (dados[4][0].id > 5 && dados[4][0].id <= 10) {
            document.getElementById('abCm').style.color = '#27AE60';
        } else {
            document.getElementById('abCm').style.color = '#2E5BCC';
        }

        console.log(dados[2][0].quantidade);




    });

let graficoPizza = null;

function criarGrafico(nomes, valores) {

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
                    "#E53935",
                    "#43A047",
                    "#1E88E5",
                    "#F5A623",
                    "#8E24AA",
                    "#00ACC1",
                    "#6D4C41",
                    "#3949AB",
                    "#C0CA33",
                    "#FB8C00",
                    "#8D6E63",
                    "#D81B60",
                    "#546E7A",
                    "#7CB342",
                    "#5E35B1"
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Aberturas Mais Utilizadas',
                    color: 'white',
                    font: {
                        size: 20
                    }
                }
            }
        }
    });

}

criarGrafico();