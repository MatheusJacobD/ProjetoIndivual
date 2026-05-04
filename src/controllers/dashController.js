var dashModel = require("../models/dashModel");

function receberResultados(req, res) {
    dashModel.receberResultados()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function(erro) {

            console.log(erro);

            console.log(
                "\nHouve um erro ao buscar resultado! Erro: ",
                erro.sqlMessage
            );

            res.status(500).json(erro.sqlMessage);
        }
        );
}

module.exports = {
    receberResultados
}