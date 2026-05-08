const corVerde = "#779556";
const corBege = "#EBECD0";

function gerar(id, linhas, colunas) {

    var tabuleiro = document.getElementById(id);

    var texto = tabuleiro.innerHTML;

    var html = "";

    for (var linha = 0; linha < linhas; linha++) {

        for (var coluna = 0; coluna < colunas; coluna++) {

            var cor;

            if ((linha + coluna) % 2 == 0) {
                cor = corBege;
            } else {
                cor = corVerde;
            }

            var r = parseInt(cor.slice(1, 3), 16);
            var g = parseInt(cor.slice(3, 5), 16);
            var b = parseInt(cor.slice(5, 7), 16);

            var opacidade = 1 - (coluna * 0.05);

            if (opacidade < 0.15) {
                opacidade = 0.15;
            }

            html += `
                <div style="
                    width:${100 / colunas}%;
                    height:${100 / linhas}%;
                    float:left;
                    background-color:rgba(${r}, ${g}, ${b}, ${opacidade});
                "></div>
            `;
        }
    }

    tabuleiro.innerHTML = html + texto;
}

gerar("tabuleiroTab", 3, 18);
gerar("tabuleiroFinal", 8, 18);