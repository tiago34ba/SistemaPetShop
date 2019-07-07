function VendasItens() {
        this._connection = connection;
}
    Fornecedor.prototype.getVendasItens= function (callbeack) {
        this._connection.query('select * from fornecedor', callbeack);

    }
    Fornecedor.prototype.getVendasItens= function (fornecedor, callbeack) {
        this._connection.query('insert into vendasitens set ?', fornecedor, callbeack)
    }
    Fornecedor.prototype.salvarVendasItens= function (fornecedor, callback) {
        this._connction.query('insert into vendasitens set ?', fornecedor, callback)
    }

module.exports = function () {
    return Fornecedor;
}