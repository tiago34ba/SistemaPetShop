module.exports = function (app) {
    app.get('/estoque', function (req, res) {
        var connection = app.config.dbconnection();
        var EstoqueModel = api.api.model.EstoqueModel;

        EstoqueModel.getNoticias(connection, function (error, result) {
            res.render("estoque/estoque", {estoque: result});

        connection.query('select*from estoque');
        });

    });
};