module.exports = function (app) {
    app.get('/produto', function (req, res) {
        var connection = app.config.dbconnection();
        var ProdutoModel = api.api.model.ProdutoModel;

        ProdutoModel.getProduto(connection, function (error, result) {
            res.render("produto/produto", {produto: result});

        connection.query('select*from produto');
        });

    });
};