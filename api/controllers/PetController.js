var Pet = require('./model');


var cadastrarPet = function (req, res) {
    var pet = req.body; // se não houver o body-parser, não dá para pegar o json do cliente usando o '.body'

    console.log(req);
    new Pet(pet).save(function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: "Erro ao cadastrar - " + error.message,
            }); // enviando o resulato para o Pet
        } else {
            res.status(201).json({
                success: true,
                message: "Pet cadastrado com sucesso.",
                data: data
            });
        }
    });
}

var listarPet = function (req, res) {
    Pet.find(function (error, data) {
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

var listarPetId = function (req, res) {
    Pet.findById(req.params.id, function (error, data) {
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

var atualizaPet = function (req, res) {
    var query = {
        _id: req.params.id
    };
    var Pet = req.body;

    Pet.findOneAndUpdate(query, Pet, function (error, data) {
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

var removerPet = function (req, res) {
    var query = {
        _id: req.params.id
    };

    Pet.findOneAndRemove(query, function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: "Erro ao remover - " + error.message,
            });
        } else {
            res.status(200).json({
                success: true,
                message: "Pet removido com sucesso.",
                data: data
            });
        }
    });
}


var listaPorPet = function (req, res) {

    var query = {
        requerente: req.params.requerente
    };
    Pet.find(query, function (error, data) {
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

exports.cadastrarPet = cadastrarPet; // faz com que os outros arquivos "vejam" este
exports.listarPet = listarPet;
exports.listarPetId = listarPetId;
exports.atualizaPet = atualizaPet;
exports.removerPet = removerPet;
exports.listaPorPet = listaPorPet;