var resultModel = require("../models/resultModel");

function exibirResultado(req, res) {

    var idUsuario = req.body.idUsuarioServer;

    if (idUsuario == undefined) {

        res.status(400).send("idUsuario está undefined");

    } else {

        resultModel.exibirResultado(idUsuario)
            .then(
                function (resultado) {

                    res.json(resultado);

                }
            )
            .catch(
                function (erro) {

                    console.log(erro);

                    console.log(
                        "\nHouve um erro ao buscar resultado! Erro: ",
                        erro.sqlMessage
                    );

                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    exibirResultado
};