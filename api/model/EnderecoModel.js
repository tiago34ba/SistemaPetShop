function Endereco() {
    this._connection = connection;
}
    Endereco.prototype.getEndereco = function (callbeack) {
        this._connection.query('select * from endereco', callbeack);

    }
    Endereco.prototype.getEndereco = function (endereco,callbeack) {
        this._connection.query('insert into endereco set ?', endereco, callbeack)
    }
    Endereco.prototype.salvarEndereco = function (endereco,callback) {
        this._connction.query('insert into endereco set ?', endereco, callback)
    }

module.exports = function () {
    return Endereco;
}