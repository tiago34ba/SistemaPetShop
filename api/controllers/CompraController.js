var Compra  = require('./model');


var cadastrarCompra  = function (req, res) {
    var compra  = req.body; // se não houver o body-parser, não dá para pegar o json do cliente usando o '.body'

    console.log(req);
    new Compra (compra ).save(function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: "Erro ao cadastrar - " + error.message,
            }); // enviando o resulato para o Compra 
        } else {
            res.status(201).json({
                success: true,
                message: "Compra  cadastrado com sucesso.",
                data: data
            });
        }
    });
}

var listarCompra  = function (req, res) {
    Compra .find(function (error, data) {
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

var listarCompra Id = function (req, res) {
    Compra .findById(req.params.id, function (error, data) {
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

var atualizaCompra  = function (req, res) {
    var query = {
        _id: req.params.id
    };
    var Compra  = req.body;

    Compra .findOneAndUpdate(query, Compra , function (error, data) {
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

var removerCompra  = function (req, res) {
    var query = {
        _id: req.params.id
    };

    Compra .findOneAndRemove(query, function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: "Erro ao remover - " + error.message,
            });
        } else {
            res.status(200).json({
                success: true,
                message: "Compra  removido com sucesso.",
                data: data
            });
        }
    });
}


var listaPorCompra  = function (req, res) {

    var query = {
        requerente: req.params.requerente
    };
    Compra .find(query, function (error, data) {
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

exports.cadastrarCompra  = cadastrarCompra ; // faz com que os outros arquivos "vejam" este
exports.listarCompra  = listarCompra ;
exports.listarCompra Id = listarCompra Id;
exports.atualizaCompra  = atualizaCompra ;
exports.removerCompra  = removerCompra ;
exports.listaPorCompra  = listaPorCompra ;