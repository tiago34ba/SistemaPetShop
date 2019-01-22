module.exports = function (app) {
    app.get('/endereco', function (req, res) {
        var connection = app.config.dbconnection();
        var EnderecoModel = Api.Api.model.EnderecoModel;

        EnderecoModel.getNoticias(connection, function (error, result) {
            res.render("endereco/endereco", {endereco: result});
            connection.query('select*from endereco');
        });

    });
};