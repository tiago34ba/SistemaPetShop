module.exports = function (app) {
    app.get('/produto', function (req, res) {
        var connection = app.config.dbconnection();
        var produtoModel = api.api.model.produtoModel;

        produtoModel.getProduto(connection, function (error, result) {
            res.render("produto/produto", {produto: result});

        connection.query('select*from produto');
        });

    });
};