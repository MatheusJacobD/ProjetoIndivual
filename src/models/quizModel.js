var database = require("../database/config");

function salvarResultado(idUsuario, estilo, gm, abertura) {

    var instrucaoSql = `
        UPDATE usuario SET estiloId = ${estilo}, gmId = ${gm}, aberturaId = ${abertura} WHERE id = ${idUsuario};
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    salvarResultado
};