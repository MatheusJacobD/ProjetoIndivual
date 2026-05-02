fetch("/result/exibirResultado", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        idUsuarioServer: sessionStorage.ID_USUARIO
    })
})
    .then(function (resposta) {
        return resposta.json();
    })
    .then(function (dados) {

        console.log(dados);

        let resultado = dados[0];

        console.log(resultado.estilo);
        console.log(resultado.gm);
        console.log(resultado.abertura);

        let estiloIcon;
        let pecaIcon;
        let cor;

        if (resultado.estilo == 'Agressivo') {
            estiloIcon = 'fogo.png';
            pecaIcon = 'dama.png';
            cor = '#CC2E31';
        } else if (resultado.estilo == 'Fechado') {
            estiloIcon = 'cadeado.png';
            pecaIcon = 'cavalo.png';
            cor = '#2E5BCC';
        } else {
            estiloIcon = 'cerebro.png';
            pecaIcon = 'bispo.png';
            cor = '#27AE60';
        }

        document.getElementById('resultadoGMImagem').src = `img/gm/${resultado.gm}.jpg`;
        document.getElementById('resultadoGMNome').textContent = `${resultado.gm}`;
        document.getElementById('resultadoGMDesc').textContent = `${resultado.descricaoGm}`;

        document.getElementById('resultadoEstiloNome').textContent = `${resultado.estilo}`;
        document.getElementById('resultadoEstiloIcon').src = `img/${estiloIcon}`;
        document.getElementById('resultadoEstiloDesc').textContent = `${resultado.descricaoEstilo}`;
        document.getElementById('resultadoFundo').style.backgroundColor = cor;

        document.getElementById('resultadoAberturaNome').textContent = `Abertura Recomendada: ${resultado.abertura}`;
        document.getElementById('resultadoAberturaDesc').textContent = `${resultado.descricaoAbertura}`;
        document.getElementById('resultadoPeca').src = `img/${pecaIcon}`;
        document.getElementById('resultadoPeca2').src = `img/${pecaIcon}`;
    });