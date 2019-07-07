function Servico() {
        this._connection = connection;
}
    Fornecedor.prototype.getServico= function (callbeack) {
        this._connection.query('select * from fornecedor', callbeack);

    }
    Fornecedor.prototype.getServico= function (fornecedor,callbeack) {
        this._connection.query('insert into servico set ?', fornecedor, callbeack)
    }
    Fornecedor.prototype.salvarServico= function (fornecedor,callback) {
        this._connction.query('insert into servico set ?', fornecedor, callback)
    }

module.exports = function () {
    return Fornecedor;
}