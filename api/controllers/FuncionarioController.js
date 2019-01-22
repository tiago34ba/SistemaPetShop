var Funcionario = require('./model');


var cadastrarFuncionario = function (req, res) {
    var funcionario = req.body; // se não houver o body-parser, não dá para pegar o json do cliente usando o '.body'

    console.log(req);
    new Funcionario(funcionario).save(function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: "Erro ao cadastrar - " + error.message,
            }); // enviando o resulato para o Funcionario
        } else {
            res.status(201).json({
                success: true,
                message: "Funcionario cadastrado com sucesso.",
                data: data
            });
        }
    });
}

var listarFuncionario = function (req, res) {
    Funcionario.find(function (error, data) {
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

var listarFuncionarioId = function (req, res) {
    Funcionario.findById(req.params.id, function (error, data) {
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

var atualizaFuncionario = function (req, res) {
    var query = {
        _id: req.params.id
    };
    var Funcionario = req.body;

    Funcionario.findOneAndUpdate(query, Funcionario, function (error, data) {
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

var removerFuncionario = function (req, res) {
    var query = {
        _id: req.params.id
    };

    Funcionario.findOneAndRemove(query, function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: "Erro ao remover - " + error.message,
            });
        } else {
            res.status(200).json({
                success: true,
                message: "Funcionario removido com sucesso.",
                data: data
            });
        }
    });
}


var listaPorFuncionario = function (req, res) {

    var query = {
        requerente: req.params.requerente
    };
    Funcionario.find(query, function (error, data) {
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

exports.cadastrarFuncionario = cadastrarFuncionario; // faz com que os outros arquivos "vejam" este
exports.listarFuncionario = listarFuncionario;
exports.listarFuncionarioId = listarFuncionarioId;
exports.atualizaFuncionario = atualizaFuncionario;
exports.removerFuncionario = removerFuncionario;
exports.listaPorFuncionario = listaPorFuncionario;


