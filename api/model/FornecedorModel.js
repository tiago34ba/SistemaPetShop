function Fornecedor() {
        this._connection = connection;
}
    Fornecedor.prototype.getFornecedor = function (callbeack) {
        this._connection.query('select * from fornecedor', callbeack);

    }
    Fornecedor.prototype.getFornecedor = function (fornecedor,callbeack) {
        this._connection.query('insert into fornecedor set ?', fornecedor, callbeack)
    }
    Fornecedor.prototype.salvarFornecedor = function (fornecedor,callback) {
        this._connction.query('insert into fornecedor set ?', fornecedor, callback)
    }

module.exports = function () {
    return Fornecedor;
}