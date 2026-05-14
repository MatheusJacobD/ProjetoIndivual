var dashModel = require("../models/dashModel");

function receberResultados(req, res) {

    let dados = {};

    dashModel.buscarTotalUsuarios()
        .then(function (resultado) {

            dados.totalUsuarios = resultado;

            return dashModel.buscarUsuariosResponderam();
        })

        .then(function (resultado) {

            dados.usuariosResponderam = resultado;

            return dashModel.buscarEstilos();
        })

        .then(function (resultado) {

            dados.estilos = resultado;

            return dashModel.buscarGmMaisRecebido();
        })

        .then(function (resultado) {

            dados.gmMaisRecebido = resultado;

            return dashModel.buscarAberturaMaisRecebida();
        })

        .then(function (resultado) {

            dados.aberturaMaisRecebida = resultado;

            return dashModel.buscarAberturas();
        })

        .then(function (resultado) {

            dados.aberturas = resultado;

            return dashModel.buscarGms();
        })

        .then(function (resultado) {

            dados.gms = resultado;

            return dashModel.buscarRanking();
        })

        .then(function (resultado) {

            dados.ranking = resultado;

            res.json(dados);
        })

        .catch(function (erro) {

            console.log(erro);

            console.log(
                "\nHouve um erro ao buscar resultado! Erro: ",
                erro.sqlMessage
            );

            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    receberResultados
}