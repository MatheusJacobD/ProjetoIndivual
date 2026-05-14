var database = require("../database/config")

function buscarTotalUsuarios() {
    var instrucaoSql = `
        SELECT COUNT(*) AS totalUsuarios 
        FROM usuario;
    `;

    return database.executar(instrucaoSql);
}

function buscarUsuariosResponderam() {
    var instrucaoSql = `
        SELECT COUNT(*) AS usuariosResponderam 
        FROM usuario 
        WHERE estiloId IS NOT NULL;
    `;

    return database.executar(instrucaoSql);
}

function buscarEstilos() {
    var instrucaoSql = `
        SELECT 
            e.nome AS estilo,
            COUNT(u.id) AS quantidade
        FROM estilo e
        LEFT JOIN usuario u 
            ON u.estiloId = e.id
        GROUP BY e.id, e.nome
        ORDER BY quantidade DESC;
    `;

    return database.executar(instrucaoSql);
}

function buscarGmMaisRecebido() {
    var instrucaoSql = `
        SELECT 
            g.nome AS gmMaisRecebido,
            COUNT(u.id) AS quantidade
        FROM gm g
        JOIN usuario u 
            ON u.gmId = g.id
        GROUP BY g.id, g.nome
        ORDER BY quantidade DESC
        LIMIT 1;
    `;

    return database.executar(instrucaoSql);
}

function buscarAberturaMaisRecebida() {
    var instrucaoSql = `
        SELECT 
            a.id as id,
            a.nome AS aberturaMaisRecebida,
            COUNT(u.id) AS quantidade
        FROM abertura a
        JOIN usuario u 
            ON u.aberturaId = a.id
        GROUP BY a.id, a.nome
        ORDER BY quantidade DESC
        LIMIT 1;
    `;

    return database.executar(instrucaoSql);
}

function buscarAberturas() {
    var instrucaoSql = `
        SELECT 
            a.nome AS abertura,
            COUNT(u.id) AS quantidade
        FROM abertura a
        LEFT JOIN usuario u 
            ON u.aberturaId = a.id
        GROUP BY a.id, a.nome
        ORDER BY quantidade DESC
        LIMIT 4;
    `;

    return database.executar(instrucaoSql);
}

function buscarGms() {
    var instrucaoSql = `
        SELECT 
            g.nome AS gm,
            COUNT(u.id) AS quantidade
        FROM gm g
        LEFT JOIN usuario u 
            ON u.gmId = g.id
        GROUP BY g.id, g.nome
        ORDER BY quantidade DESC
        LIMIT 6;
    `;

    return database.executar(instrucaoSql);
}

function buscarRanking() {
    var instrucaoSql = `
        SELECT 
            u.id,
            u.nome,
            e.nome AS estilo,
            g.nome AS gm,
            a.nome AS abertura
        FROM usuario u
        JOIN estilo e 
            ON u.estiloId = e.id
        JOIN gm g 
            ON u.gmId = g.id
        JOIN abertura a 
            ON u.aberturaId = a.id
        ORDER BY u.id;
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    buscarTotalUsuarios,
    buscarUsuariosResponderam,
    buscarEstilos,
    buscarGmMaisRecebido,
    buscarAberturaMaisRecebida,
    buscarAberturas,
    buscarGms,
    buscarRanking
};