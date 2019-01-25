var Internacao = require('./model');


var cadastrarInternacao = function (req, res) {
    var internacao = req.body; // se não houver o body-parser, não dá para pegar o json do internacao usando o '.body'

    console.log(req);
    new Internacao(internacao).save(function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: "Erro ao cadastrar - " + error.message,
            }); // enviando o resulato para o Internacao
        } else {
            res.status(201).json({
                success: true,
                message: "Internacao cadastrado com sucesso.",
                data: data
            });
        }
    });
}

var listarInternacao = function (req, res) {
    Internacao.find(function (error, data) {
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

var listarInternacaoId = function (req, res) {
    Internacao.findById(req.params.id, function (error, data) {
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

var atualizaInternacao = function (req, res) {
    var query = {
        _id: req.params.id
    };
    var Internacao = req.body;

    Internacao.findOneAndUpdate(query, Internacao, function (error, data) {
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

var removerInternacao = function (req, res) {
    var query = {
        _id: req.params.id
    };

    Internacao.findOneAndRemove(query, function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: "Erro ao remover - " + error.message,
            });
        } else {
            res.status(200).json({
                success: true,
                message: "Internacao removido com sucesso.",
                data: data
            });
        }
    });
}


var listaPorInternacao = function (req, res) {

    var query = {
        requerente: req.params.requerente
    };
    Internacao.find(query, function (error, data) {
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

exports.cadastrarInternacao = cadastrarInternacao; // faz com que os outros arquivos "vejam" este
exports.listarInternacao = listarInternacao;
exports.listarInternacaoId = listarInternacaoId;
exports.atualizaInternacao = atualizaInternacao;
exports.removerInternacao = removerInternacao;
exports.listaPorInternacao = listaPorInternacao;


