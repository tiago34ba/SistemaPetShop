var Servico = require('./model');


var cadastrarServico = function (req, res) {
    var servico = req.body; // se não houver o body-parser, não dá para pegar o json do cliente usando o '.body'

    console.log(req);
    new Servico(servico).save(function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: "Erro ao cadastrar - " + error.message,
            }); // enviando o resulato para o Servico
        } else {
            res.status(201).json({
                success: true,
                message: "Servico cadastrado com sucesso.",
                data: data
            });
        }
    });
}

var listarServico = function (req, res) {
    Servico.find(function (error, data) {
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

var listarServicoId = function (req, res) {
    Servico.findById(req.params.id, function (error, data) {
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

var atualizaServico = function (req, res) {
    var query = {
        _id: req.params.id
    };
    var Servico = req.body;

    Servico.findOneAndUpdate(query, Servico, function (error, data) {
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

var removerServico = function (req, res) {
    var query = {
        _id: req.params.id
    };

    Servico.findOneAndRemove(query, function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: "Erro ao remover - " + error.message,
            });
        } else {
            res.status(200).json({
                success: true,
                message: "Servico removido com sucesso.",
                data: data
            });
        }
    });
}


var listaPorServico = function (req, res) {

    var query = {
        requerente: req.params.requerente
    };
    Servico.find(query, function (error, data) {
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

exports.cadastrarServico = cadastrarServico; // faz com que os outros arquivos "vejam" este
exports.listarServico = listarServico;
exports.listarServicoId = listarServicoId;
exports.atualizaServico = atualizaServico;
exports.removerServico = removerServico;
exports.listaPorServico = listaPorServico;