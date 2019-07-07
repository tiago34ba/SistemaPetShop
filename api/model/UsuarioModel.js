function Usuario() {
    this._connection = connection;
}
    Fornecedor.prototype.getUsuario= function (callbeack) {
        this._connection.query('select * from fornecedor', callbeack);

    }
    Fornecedor.prototype.getUsuario= function (fornecedor, callbeack) {
        this._connection.query('insert into usuario set ?', fornecedor, callbeack)
    }
    Fornecedor.prototype.salvarUsuario= function (fornecedor,callback) {
        this._connction.query('insert into usuario set ?', fornecedor, callback)
    }

module.exports = function () {
    return Fornecedor;
}