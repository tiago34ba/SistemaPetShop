module.exports = function (app) {
    app.get('/usuario', function (req, res) {
        var connection = app.config.dbconnection();
        var UsuarioModel = Api.Api.model.UsuarioModel;

        UsuarioModel.getNoticias(connection, function (error, result) {
            res.render("usuario/usuario", {usuario: result});
            connection.query('select*from usuario');
        });

    });
};