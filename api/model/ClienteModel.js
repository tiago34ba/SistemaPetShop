function Cliente() {
    this._connection = connection;
}
    Cliente.prototype.getCliente = function (callbeack) {
        this._connection.query('select * from cliente', callbeack);

    }
    Cliente.prototype.getCliente = function (cliente,callbeack) {
        this._connection.query('insert into cliente set ?', cliente, callbeack)
    }
    Cliente.prototype.salvarCliente = function (cliente,callback) {
        this._connction.query('insert into cliente set ?', cliente, callback)
    }

module.exports = function () {
    return Cliente;
}