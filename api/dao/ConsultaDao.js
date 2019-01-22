module.exports = function (app) {
    app.get('/consulta', function (req, res) {
        var connection = app.config.dbconnection();
        var ConsultaModel = api.api.model.ConsultaModel;

        ConsultaModel.getNoticias(connection, function (error, result) {
            res.render("consulta/consulta", {consulta: result});

        connection.query('select*from consulta');
        });

    });
};