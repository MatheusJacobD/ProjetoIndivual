var quizModel = require("../models/quizModel");

function salvarResultado(req, res) {

    var idUsuario = req.body.idUsuarioServer;
    var estilo = req.body.estiloServer;
    var gm = req.body.gmServer;
    var abertura = req.body.aberturaServer;

    if (idUsuario == undefined) {
        res.status(400).send("idUsuario undefined");
    } else if (estilo == undefined) {
        res.status(400).send("estilo undefined");
    } else if (gm == undefined) {
        res.status(400).send("gm undefined");
    } else {

        quizModel.salvarResultado(idUsuario, estilo, gm, abertura)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {

                console.log(erro);

                console.log(
                    "\nErro ao salvar resultado:",
                    erro.sqlMessage
                );

                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    salvarResultado
};

