module.exports = function (app) {
    app.get('/fornecedor', function (req, res) {
        var connection = app.config.dbconnection();
        var FornecedorModel = Api.Api.model.FornecedorModel;

        FornecedorModel.getNoticias(connection, function (error, result) {
            res.render("fornecedor/fornecedor", {fornecedor: result});
            connection.query('select*from fornecedor');
        });

    });
};