var Consulta = require('./model');


var cadastrarConsulta = function (req, res) {
    var consulta = req.body; // se não houver o body-parser, não dá para pegar o json do cliente usando o '.body'

    console.log(req);
    new Consulta(consulta).save(function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: "Erro ao cadastrar - " + error.message,
            }); // enviando o resulato para o Consulta
        } else {
            res.status(201).json({
                success: true,
                message: "Consulta cadastrado com sucesso.",
                data: data
            });
        }
    });
}

var listarConsulta = function (req, res) {
    Consulta.find(function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        } else if (!data) {
            res.status(404).json({
                success: false,
                message: "Nenhum registro localizado."
            });
        } else {
            res.status(200).json({
                success: true,
                message: "Ok - Dados localizados com sucesso.",
                data: data
            });
        }
    });
}

var listarConsultaId = function (req, res) {
    Consulta.findById(req.params.id, function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        } else if (!data) {
            res.status(404).json({
                success: false,
                message: "Nenhum registro localizado."
            });
        } else {
            res.status(200).json({
                success: true,
                message: "Ok",
                data: data
            });
        }
    });
}

var atualizaConsulta = function (req, res) {
    var query = {
        _id: req.params.id
    };
    var Consulta = req.body;

    Consulta.findOneAndUpdate(query, Consulta, function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: "Erro ao atualizar - " + error.message,
            });
        } else {
            res.status(200).json({
                success: true,
                message: "docente atualizado com sucesso.",
                data: data
            });
        }
    });
}

var removerConsulta = function (req, res) {
    var query = {
        _id: req.params.id
    };

    Consulta.findOneAndRemove(query, function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: "Erro ao remover - " + error.message,
            });
        } else {
            res.status(200).json({
                success: true,
                message: "Consulta removido com sucesso.",
                data: data
            });
        }
    });
}


var listaPorConsulta = function (req, res) {

    var query = {
        requerente: req.params.requerente
    };
    Consulta.find(query, function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: "Erro ao buscar- " + error.message,
            });
        } else {
            res.status(200).json({
                success: true,
                message: "sucesso.",
                data: data
            });
        }
    });
}

exports.cadastrarConsulta = cadastrarConsulta; // faz com que os outros arquivos "vejam" este
exports.listarConsulta = listarConsulta;
exports.listarConsultaId = listarConsultaId;
exports.atualizaConsulta = atualizaConsulta;
exports.removerConsulta = removerConsulta;
exports.listaPorConsulta = listaPorConsulta;