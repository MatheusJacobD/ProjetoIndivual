var database = require("../database/config")

function receberResultados() {
    var instrucaoSql = `
        SELECT COUNT(*) AS totalUsuarios FROM usuario;

        SELECT COUNT(*) AS usuariosResponderam FROM usuario WHERE estiloId IS NOT NULL;

        SELECT 
            e.nome AS estilo,
            COUNT(u.id) AS quantidade
        FROM estilo e
        LEFT JOIN usuario u 
            ON u.estiloId = e.id
        GROUP BY e.id, e.nome
        ORDER BY quantidade DESC;

        SELECT 
            g.nome AS gmMaisRecebido,
            COUNT(u.id) AS quantidade
        FROM gm g
        JOIN usuario u 
            ON u.gmId = g.id
        GROUP BY g.id, g.nome
        ORDER BY quantidade DESC
        LIMIT 1;

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

        SELECT 
            a.nome AS abertura,
            COUNT(u.id) AS quantidade
        FROM abertura a
        LEFT JOIN usuario u 
            ON u.aberturaId = a.id
        GROUP BY a.id, a.nome
        ORDER BY quantidade DESC
        limit 4;

        SELECT 
            g.nome AS gm,
            COUNT(u.id) AS quantidade
        FROM gm g
        LEFT JOIN usuario u 
            ON u.gmId = g.id
        GROUP BY g.id, g.nome
        ORDER BY quantidade DESC
        limit 6;

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
            ON u.aberturaId = a.id;
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    receberResultados
};