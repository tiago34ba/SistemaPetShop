module.exports = function (app) {
    app.get('/clinica', function (req, res) {
        var connection = app.config.dbconnection();
        var ClinicaModel = api.api.model.clinicaModel;

        ClinicaModel.getProduto(connection, function (error, result) {
            res.render("clinica/clinica", {clinica: result});

        connection.query('select*from clinica');
        });

    });
};