module.exports = function (app) {
    app.get('/funcionario', function (req, res) {
        var connection = app.config.dbconnection();
        var FuncionarioModel = api.api.model.FuncionarioModel;

        FuncionarioModel.getProduto(connection, function (error, result) {
            res.render("funcionario/funcionario", {funcionario: result});

        connection.query('select*from funcionario');
        });

    });
};


