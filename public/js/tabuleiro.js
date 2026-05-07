const corVerde = "#779556";
const corBege = "#EBECD0";

function gerar(id, linhas, colunas) {
    let tabuleiro = document.getElementById(id);
    if (!tabuleiro) {
        return;
    }

    let texto = tabuleiro.querySelector("span");
    let textoHTML = "";

    if (texto) {
        textoHTML = texto.outerHTML;
    }

    let html = "";

    for (let linha = 0; linha < linhas; linha++) {
        for (let coluna = 0; coluna < colunas; coluna++) {
            let cor = ((linha + coluna) % 2 == 0) ? corBege : corVerde;

            let r = parseInt(cor.slice(1, 3), 16);
            let g = parseInt(cor.slice(3, 5), 16);
            let b = parseInt(cor.slice(5, 7), 16);

            let opacidade = 1 - (coluna * 0.05);
            if (opacidade < 0.15) {
                opacidade = 0.15;
            }

            html += `
                <div style="
                    width: ${100 / colunas}%;
                    height: ${100 / linhas}%;
                    float: left;
                    background-color: rgba(${r}, ${g}, ${b}, ${opacidade});
                "></div>
            `;
        }
    }

    tabuleiro.innerHTML = html + textoHTML;
}

gerar("tabuleiroTab", 3, 18);
gerar("tabuleiroFinal", 8, 18);