var IntensVenda = require('./model');


var cadastrarIntensVenda = function (req, res) {
    var intensvenda = req.body; // se não houver o body-parser, não dá para pegar o json do intensvenda usando o '.body'

    console.log(req);
    new IntensVenda(intensvenda).save(function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: "Erro ao cadastrar - " + error.message,
            }); // enviando o resulato para o IntensVenda
        } else {
            res.status(201).json({
                success: true,
                message: "IntensVenda cadastrado com sucesso.",
                data: data
            });
        }
    });
}

var listarIntensVenda = function (req, res) {
    IntensVenda.find(function (error, data) {
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

var listarIntensVendaId = function (req, res) {
    IntensVenda.findById(req.params.id, function (error, data) {
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

var atualizaIntensVenda = function (req, res) {
    var query = {
        _id: req.params.id
    };
    var IntensVenda = req.body;

    IntensVenda.findOneAndUpdate(query, IntensVenda, function (error, data) {
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

var removerIntensVenda = function (req, res) {
    var query = {
        _id: req.params.id
    };

    IntensVenda.findOneAndRemove(query, function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: "Erro ao remover - " + error.message,
            });
        } else {
            res.status(200).json({
                success: true,
                message: "IntensVenda removido com sucesso.",
                data: data
            });
        }
    });
}


var listaPorIntensVenda = function (req, res) {

    var query = {
        requerente: req.params.requerente
    };
    IntensVenda.find(query, function (error, data) {
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

exports.cadastrarIntensVenda = cadastrarIntensVenda; // faz com que os outros arquivos "vejam" este
exports.listarIntensVenda = listarIntensVenda;
exports.listarIntensVendaId = listarIntensVendaId;
exports.atualizaIntensVenda = atualizaIntensVenda;
exports.removerIntensVenda = removerIntensVenda;
exports.listaPorIntensVenda = listaPorIntensVenda;


