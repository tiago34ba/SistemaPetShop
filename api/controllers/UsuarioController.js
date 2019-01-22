var Usuario = require('./model');


var cadastrarUsuario = function (req, res) {
    var usuario = req.body; // se não houver o body-parser, não dá para pegar o json do cliente usando o '.body'

    console.log(req);
    new Usuario(usuario).save(function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: "Erro ao cadastrar - " + error.message,
            }); // enviando o resulato para o Usuario
        } else {
            res.status(201).json({
                success: true,
                message: "Usuario cadastrado com sucesso.",
                data: data
            });
        }
    });
}

var listarUsuario = function (req, res) {
    Usuario.find(function (error, data) {
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

var listarUsuarioId = function (req, res) {
    Usuario.findById(req.params.id, function (error, data) {
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

var atualizaUsuario = function (req, res) {
    var query = {
        _id: req.params.id
    };
    var Usuario = req.body;

    Usuario.findOneAndUpdate(query, Usuario, function (error, data) {
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

var removerUsuario = function (req, res) {
    var query = {
        _id: req.params.id
    };

    Usuario.findOneAndRemove(query, function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: "Erro ao remover - " + error.message,
            });
        } else {
            res.status(200).json({
                success: true,
                message: "Usuario removido com sucesso.",
                data: data
            });
        }
    });
}


var listaPorUsuario = function (req, res) {

    var query = {
        requerente: req.params.requerente
    };
    Usuario.find(query, function (error, data) {
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

exports.cadastrarUsuario = cadastrarUsuario; // faz com que os outros arquivos "vejam" este
exports.listarUsuario = listarUsuario;
exports.listarUsuarioId = listarUsuarioId;
exports.atualizaUsuario = atualizaUsuario;
exports.removerUsuario = removerUsuario;
exports.listaPorUsuario = listaPorUsuario;