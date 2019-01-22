var Fornecedor = require('./model');


var cadastrarFornecedor = function (req, res) {
    var fornecedor = req.body; // se não houver o body-parser, não dá para pegar o json do cliente usando o '.body'

    console.log(req);
    new Fornecedor(fornecedor).save(function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: "Erro ao cadastrar - " + error.message,
            }); // enviando o resulato para o Fornecedor
        } else {
            res.status(201).json({
                success: true,
                message: "Fornecedor cadastrado com sucesso.",
                data: data
            });
        }
    });
}

var listarFornecedor = function (req, res) {
    Fornecedor.find(function (error, data) {
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

var listarFornecedorId = function (req, res) {
    Fornecedor.findById(req.params.id, function (error, data) {
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

var atualizaFornecedor = function (req, res) {
    var query = {
        _id: req.params.id
    };
    var Fornecedor = req.body;

    Fornecedor.findOneAndUpdate(query, Fornecedor, function (error, data) {
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

var removerFornecedor = function (req, res) {
    var query = {
        _id: req.params.id
    };

    Fornecedor.findOneAndRemove(query, function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: "Erro ao remover - " + error.message,
            });
        } else {
            res.status(200).json({
                success: true,
                message: "Fornecedor removido com sucesso.",
                data: data
            });
        }
    });
}


var listaPorFornecedor = function (req, res) {

    var query = {
        requerente: req.params.requerente
    };
    Fornecedor.find(query, function (error, data) {
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

exports.cadastrarFornecedor = cadastrarFornecedor; // faz com que os outros arquivos "vejam" este
exports.listarFornecedor = listarFornecedor;
exports.listarFornecedorId = listarFornecedorId;
exports.atualizaFornecedor = atualizaFornecedor;
exports.removerFornecedor = removerFornecedor;
exports.listaPorFornecedor = listaPorFornecedor;