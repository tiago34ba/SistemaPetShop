var express = require('express');
var consign = require('consign');
var bodyParser = requere('body-parser');

var api = express();

api.set('view engine', 'ejs');
api.set('view', './app/views');


application.post('/agendamento/salvar', function(req, res)

        var connection = application.config.dbconnection();
var AgendamentoModel = application.app.model.AgendamentoModel;

AgendamentoModel.salvarAgendamento(agendamento, connection, function (error, result) {
    res.redirect('/agendamento');
});

application.post('/cliente/salvar', function(req, res)

        var connection = application.config.dbconnection();
var ClienteModel = application.app.model.ClienteModel;

ClienteModel.salvarCliente(cliente, connection, function (error, result) {
    res.redirect('/cliente');
});

application.post('/clinica/salvar', function(req, res)

        var connection = application.config.dbconnection();
var ClinicaModel = application.app.model.ClinicaModel;

ClinicaModel.salvarClinica(clinica, connection, function (error, result) {
    res.redirect('/clinica');
});


application.post('/clinica/salvar', function(req, res)

        var connection = application.config.dbconnection();
var ConsultaModel = application.app.model.ConsultaModel;

ConsultaModel.salvarConsulta(consulta, connection, function (error, result) {
    res.redirect('/consulta');
});

application.post('/contato/salvar', function(req, res)

        var connection = application.config.dbconnection();
var ContatoModel = application.app.model.ContatoModel;

ContatoModel.salvarContato(contato, connection, function (error, result) {
    res.redirect('/contato');
});


application.post('/endereco/salvar', function(req, res)

        var connection = application.config.dbconnection();
var EnderecoModel = application.app.model.EnderecoModel;

EnderecoModel.salvarEndereco(endereco, connection, function (error, result) {
    res.redirect('/endereco');
});


application.post('/fornecedor/salvar', function(req, res)

        var connection = application.config.dbconnection();
var FornecedorModel = application.app.model.FornecedorModel;

FornecedorModel.salvarFornecedor(fornecedor, connection, function (error, result) {
    res.redirect('/fornecedor');
});


application.post('/funcionario/salvar', function(req, res)

        var connection = application.config.dbconnection();
var FuncionarioModel = application.app.model.FuncionarioModel;

FuncionarioModel.salvarFuncionario(funcionario, connection, function (error, result) {
    res.redirect('/funcionario');
});

application.post('/pet/salvar', function(req, res)

        var connection = application.config.dbconnection();
var PetModel = application.app.model.PetModel;

FuncionarioModel.salvarPet(pet, connection, function (error, result) {
    res.redirect('/pet');
});

application.post('/produto/salvar', function(req, res)

        var connection = application.config.dbconnection();
var ProdutoModel = application.app.model.ProdutoModel;

ProdutoModel.salvarProduto(produto, connection, function (error, result) {
    res.redirect('/produto');
});

application.post('/servico/salvar', function(req, res)

        var connection = application.config.dbconnection();
var ServicoModel = application.app.model.ServicoModel;

ProdutoModel.salvarProduto(servico, connection, function (error, result) {
    res.redirect('/servico');
});
application.post('/usuario/salvar', function(req, res)
        var connection = application.config.dbconnection();
var UsuarioModel = application.app.model.UsuarioModel;

UsuarioModel.salvarProduto(usuario, connection, function (error, result) {
    res.redirect('/usuario');
});



api.user(bodyParser.urlencoded({extended: true}));
consign()
        .include('api/routes')
        .then('/api/dao')
        .then('api/model')
        .then('api/db_consultas')
        .into(api);
module.exports = api;