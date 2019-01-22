module.exports = function (app) {
    app.get('/pet', function (req, res) {
        var connection = app.config.dbconnection();
        var PetModel = Api.Api.model.PetModel;

        PetModel.getNoticias(connection, function (error, result) {
            res.render("pet/pet", {pet: result});
            connection.query('select*from pet');
        });

    });
};