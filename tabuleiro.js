const corVerde = "#779556";
const corBege = "#EBECD0";

function gerarTabuleiro(id, linhas, colunas) {
    let tabuleiro = document.getElementById(id);

    if (!tabuleiro) {
        return;
    }

    tabuleiro.innerHTML = "";

    for (let linha = 0; linha < linhas; linha++) {

        for (let coluna = 0; coluna < colunas; coluna++) {

            let casa = document.createElement("div");

            // cor
            let cor;
            if ((linha + coluna) % 2 === 0) {
                cor = corBege;
                casa.className = "casaClara";
            } else {
                cor = corVerde;
                casa.className = "casaEscura";
            }

            // aumenta
            let r = parseInt(cor[1] + cor[2], 16);
            let g = parseInt(cor[3] + cor[4], 16);
            let b = parseInt(cor[5] + cor[6], 16);

            // dim
            let opacidade = 1 - (coluna * 0.05);
            if (opacidade < 0.15) {
                opacidade = 0.15;
            }

            casa.style.backgroundColor =
                "rgba(" + r + ", " + g + ", " + b + ", " + opacidade + ")";

            tabuleiro.appendChild(casa);
        }
    }
}

gerarTabuleiro("tabuleiroHero", 3, 18);