module.exports = function (app) {
    app.get('/intensvenda', function (req, res) {
        var connection = app.config.dbconnection();
        var IntensVendaModel = api.api.model.IntensVendaModel;

        IntensVendaModel.getNoticias(connection, function (error, result) {
            res.render("intensvenda/intensvenda", {intensvenda: result});

        connection.query('select*from intensvenda');
        });

    });
};