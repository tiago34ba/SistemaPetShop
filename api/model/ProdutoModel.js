function Produto() {
        this._connection = connection;
}
    Fornecedor.prototype.getProduto= function (callbeack) {
        this._connection.query('select * from fornecedor', callbeack);

    }
    Fornecedor.prototype.getProduto= function (fornecedor,callbeack) {
        this._connection.query('insert into produto set ?', fornecedor, callbeack)
    }
    Fornecedor.prototype.salvarProduto= function (fornecedor,callback) {
        this._connction.query('insert into produto set ?', fornecedor, callback)
    }

module.exports = function () {
    return Fornecedor;
}