var Endereco = require('./model');


var cadastrarEndereco = function (req, res) {
    var endereco = req.body; // se não houver o body-parser, não dá para pegar o json do cliente usando o '.body'

    console.log(req);
    new Endereco(endereco).save(function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: "Erro ao cadastrar - " + error.message,
            }); // enviando o resulato para o Endereco
        } else {
            res.status(201).json({
                success: true,
                message: "Endereco cadastrado com sucesso.",
                data: data
            });
        }
    });
}

var listarEndereco = function (req, res) {
    Endereco.find(function (error, data) {
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

var listarEnderecoId = function (req, res) {
    Endereco.findById(req.params.id, function (error, data) {
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

var atualizaEndereco = function (req, res) {
    var query = {
        _id: req.params.id
    };
    var Endereco = req.body;

    Endereco.findOneAndUpdate(query, Endereco, function (error, data) {
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

var removerEndereco = function (req, res) {
    var query = {
        _id: req.params.id
    };

    Endereco.findOneAndRemove(query, function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: "Erro ao remover - " + error.message,
            });
        } else {
            res.status(200).json({
                success: true,
                message: "Endereco removido com sucesso.",
                data: data
            });
        }
    });
}


var listaPorEndereco = function (req, res) {

    var query = {
        requerente: req.params.requerente
    };
    Endereco.find(query, function (error, data) {
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

exports.cadastrarEndereco = cadastrarEndereco; // faz com que os outros arquivos "vejam" este
exports.listarEndereco = listarEndereco;
exports.listarEnderecoId = listarEnderecoId;
exports.atualizaEndereco = atualizaEndereco;
exports.removerEndereco = removerEndereco;
exports.listaPorEndereco = listaPorEndereco;