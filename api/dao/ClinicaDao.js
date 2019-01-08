module.exports = function (app) {
    app.get('/clinica', function (req, res) {
        var connection = app.config.dbconnection();
        var clinicaModel = api.api.model.clinicaModel;

        clinicaModel.getProduto(connection, function (error, result) {
            res.render("clinica/clinica", {clinica: result});

        connection.query('select*from clinica');
        });

    });
};