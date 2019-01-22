module.exports = function (app) {
    app.get('/cliente', function (req, res) {
        var connection = app.config.dbconnection();
        var ClienteoModel = Api.Api.model.ClienteoModel;

        ClienteoModel.getNoticias(connection, function (error, result) {
            res.render("cliente/cliente", {cliente: result});
            connection.query('select*from cliente');
        });

    });
};