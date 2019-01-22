module.exports = function (app) {
    app.get('/compra', function (req, res) {
        var connection = app.config.dbconnection();
        var CompraModel = api.api.model.CompraModel;

        CompraModel.getNoticias(connection, function (error, result) {
            res.render("compra/compra", {compra: result});

        connection.query('select*from compra');
        });

    });
};