const corVerde = "#779556";
const corBege = "#EBECD0";

function gerar(id, linhas, colunas) {
    let tabuleiro = document.getElementById(id);
    if (!tabuleiro) {
        return;
    }
    let texto = tabuleiro.querySelector("span");

    let grid = document.createElement("div");
    grid.className = "gridTabuleiro";

    grid.style.position = "absolute";
    grid.style.inset = "0";
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = `repeat(${colunas}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${linhas}, 1fr)`;
    grid.style.zIndex = "1";

    for (let linha = 0; linha < linhas; linha++) {
        for (let coluna = 0; coluna < colunas; coluna++) {
            let casa = document.createElement("div");
            let cor;

            if ((linha + coluna) % 2 === 0) {
                cor = corBege;
                casa.className = "casaClara";
            } else {
                cor = corVerde;
                casa.className = "casaEscura";
            }

            let r = parseInt(cor.slice(1, 3), 16);
            let g = parseInt(cor.slice(3, 5), 16);
            let b = parseInt(cor.slice(5, 7), 16);

            let opacidade = 1 - (coluna * 0.05);
            if (opacidade < 0.15) opacidade = 0.15;

            casa.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacidade})`;

            grid.appendChild(casa);
        }
    }

    tabuleiro.innerHTML = "";
    tabuleiro.appendChild(grid);

    if (texto) {
        texto.classList.add("textoTabuleiroFinal");
        tabuleiro.appendChild(texto);
    }
}

gerar("tabuleiroHero", 3, 18);
gerar("tabuleiroFinal", 8, 18);