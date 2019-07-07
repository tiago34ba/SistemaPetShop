function Pet() {
    this._connection = connection;
}
    Fornecedor.prototype.getPet= function (callbeack) {
        this._connection.query('select * from fornecedor', callbeack);

    }
    Fornecedor.prototype.getPet= function (fornecedor,callbeack) {
        this._connection.query('insert into pet set ?', fornecedor, callbeack)
    }
    Fornecedor.prototype.salvarPet= function (fornecedor,callback) {
        this._connction.query('insert into pet set ?', fornecedor, callback)
    }

module.exports = function () {
    return Fornecedor;
}