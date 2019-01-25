module.exports = function (app) {
    app.get('/internacao', function (req, res) {
        var connection = app.config.dbconnection();
        var InternacaoModel = api.api.model.InternacaoModel;

        InternacaoModel.getNoticias(connection, function (error, result) {
            res.render("internacao/internacao", {internacao: result});

        connection.query('select*from internacao');
        });

    });
};