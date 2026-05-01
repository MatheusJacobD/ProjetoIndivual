var database = require("../database/config");

function salvarResultado(idUsuario, estilo, gm) {

    var instrucaoSql = `
        UPDATE usuario SET estiloId = ${estilo}, gmId = ${gm} WHERE id = ${idUsuario};
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    salvarResultado
};