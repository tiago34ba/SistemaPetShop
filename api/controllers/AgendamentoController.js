var Agendamento = require('./model');


var cadastrarAgendamento = function (req, res) {
    var agendamento = req.body; // se não houver o body-parser, não dá para pegar o json do agendamento usando o '.body'

    console.log(req);
    new Agendamento(agendamento).save(function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: "Erro ao cadastrar - " + error.message,
            }); // enviando o resulato para o Agendamento
        } else {
            res.status(201).json({
                success: true,
                message: "Agendamento cadastrado com sucesso.",
                data: data
            });
        }
    });
}

var listarAgendamento = function (req, res) {
    Agendamento.find(function (error, data) {
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

var listarAgendamentoId = function (req, res) {
    Agendamento.findById(req.params.id, function (error, data) {
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

var atualizaAgendamento = function (req, res) {
    var query = {
        _id: req.params.id
    };
    var Agendamento = req.body;

    Agendamento.findOneAndUpdate(query, Agendamento, function (error, data) {
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

var removerAgendamento = function (req, res) {
    var query = {
        _id: req.params.id
    };

    Agendamento.findOneAndRemove(query, function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: "Erro ao remover - " + error.message,
            });
        } else {
            res.status(200).json({
                success: true,
                message: "Agendamento removido com sucesso.",
                data: data
            });
        }
    });
}


var listaPorAgendamento = function (req, res) {

    var query = {
        requerente: req.params.requerente
    };
    Agendamento.find(query, function (error, data) {
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

exports.cadastrarAgendamento = cadastrarAgendamento; // faz com que os outros arquivos "vejam" este
exports.listarAgendamento = listarAgendamento;
exports.listarAgendamentoId = listarAgendamentoId;
exports.atualizaAgendamento = atualizaAgendamento;
exports.removerAgendamento = removerAgendamento;
exports.listaPorAgendamento = listaPorAgendamento;


