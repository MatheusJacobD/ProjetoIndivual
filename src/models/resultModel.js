var database = require("../database/config");

function exibirResultado(idUsuario) {

    var instrucaoSql = `
        SELECT 
            g.nome AS gm,
            g.descricao AS descricaoGm,

            e.nome AS estilo,
            e.descricao AS descricaoEstilo,

            a.nome AS abertura,
            a.descricao AS descricaoAbertura

        FROM usuario u JOIN estilo e ON u.estiloId = e.id
        JOIN gm g ON u.gmId = g.id
        JOIN abertura a ON u.aberturaId = a.id WHERE u.id = ${idUsuario};
    `;

    console.log("Executando SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql);
}

module.exports = {
    exibirResultado
};