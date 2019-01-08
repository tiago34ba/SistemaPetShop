var Contato = require('./model');


var cadastrarContato = function (req, res) {
    var contato = req.body; // se não houver o body-parser, não dá para pegar o json do cliente usando o '.body'

    console.log(req);
    new Contato(contato).save(function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: "Erro ao cadastrar - " + error.message,
            }); // enviando o resulato para o Contato
        } else {
            res.status(201).json({
                success: true,
                message: "Contato cadastrado com sucesso.",
                data: data
            });
        }
    });
}

var listarContato = function (req, res) {
    Contato.find(function (error, data) {
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

var listarContatoId = function (req, res) {
    Contato.findById(req.params.id, function (error, data) {
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

var atualizaContato = function (req, res) {
    var query = {
        _id: req.params.id
    };
    var Contato = req.body;

    Contato.findOneAndUpdate(query, Contato, function (error, data) {
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

var removerContato = function (req, res) {
    var query = {
        _id: req.params.id
    };

    Contato.findOneAndRemove(query, function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: "Erro ao remover - " + error.message,
            });
        } else {
            res.status(200).json({
                success: true,
                message: "Contato removido com sucesso.",
                data: data
            });
        }
    });
}


var listaPorContato = function (req, res) {

    var query = {
        requerente: req.params.requerente
    };
    Contato.find(query, function (error, data) {
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

exports.cadastrarContato = cadastrarContato; // faz com que os outros arquivos "vejam" este
exports.listarContato = listarContato;
exports.listarContatoId = listarContatoId;
exports.atualizaContato = atualizaContato;
exports.removerContato = removerContato;
exports.listaPorContato = listaPorContato;