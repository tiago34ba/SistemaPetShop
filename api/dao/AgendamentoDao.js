module.exports = function (app) {
    app.get('/agendamento', function (req, res) {
        var connection = app.config.dbconnection();
        var AgendamentoModel = api.api.model.AgendamentoModel;

        AgendamentoModel.getNoticias(connection, function (error, result) {
            res.render("agendamento/agendamento", {agendamento: result});

        connection.query('select*from agendamento');
        });

    });
};