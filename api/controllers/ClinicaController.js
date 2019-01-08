var Clinica = require('./model');


var cadastrarClinica = function (req, res) {
    var clinica = req.body; // se não houver o body-parser, não dá para pegar o json do cliente usando o '.body'

    console.log(req);
    new Clinica(clinica).save(function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: "Erro ao cadastrar - " + error.message,
            }); // enviando o resulato para o Clinica
        } else {
            res.status(201).json({
                success: true,
                message: "Clinica cadastrado com sucesso.",
                data: data
            });
        }
    });
}

var listarClinica = function (req, res) {
    Clinica.find(function (error, data) {
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

var listarClinicaId = function (req, res) {
    Clinica.findById(req.params.id, function (error, data) {
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

var atualizaClinica = function (req, res) {
    var query = {
        _id: req.params.id
    };
    var Clinica = req.body;

    Clinica.findOneAndUpdate(query, Clinica, function (error, data) {
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

var removerClinica = function (req, res) {
    var query = {
        _id: req.params.id
    };

    Clinica.findOneAndRemove(query, function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: "Erro ao remover - " + error.message,
            });
        } else {
            res.status(200).json({
                success: true,
                message: "Clinica removido com sucesso.",
                data: data
            });
        }
    });
}


var listaPorClinica = function (req, res) {

    var query = {
        requerente: req.params.requerente
    };
    Clinica.find(query, function (error, data) {
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

exports.cadastrarClinica = cadastrarClinica; // faz com que os outros arquivos "vejam" este
exports.listarClinica = listarClinica;
exports.listarClinicaId = listarClinicaId;
exports.atualizaClinica = atualizaClinica;
exports.removerClinica = removerClinica;
exports.listaPorClinica = listaPorClinica;