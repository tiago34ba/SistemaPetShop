module.exports = function (app) {
    app.get('/contato', function (req, res) {
        var connection = app.config.dbconnection();
        var ContatoModel = Api.Api.model.ContatoModel;

        ContatoModel.getNoticias(connection, function (error, result) {
            res.render("contato/contato", {contato: result});
            connection.query('select*from contato');
        });

    });
};