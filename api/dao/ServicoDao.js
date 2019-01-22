module.exports = function (app) {
    app.get('/servico', function (req, res) {
        var connection = app.config.dbconnection();
        var ServicoModel = api.api.model.ServicoModel;

        ServicoModel.getProduto(connection, function (error, result) {
            res.render("servico/servico", {servico: result});

        connection.query('select*from servico');
        });

    });
};