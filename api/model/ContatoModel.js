function Contato() {
    this._connection = connection;
}
    Contato.prototype.getContato = function (callbeack) {
        this._connection.query('select * from contato', callbeack);

    }
    Contato.prototype.getContato = function (contato,callbeack) {
        this._connection.query('insert into contato set ?', contato, callbeack)
    }
    Contato.prototype.salvarContato = function (contato,callback) {
        this._connction.query('insert into contato set ?', contato, callback)
    }

module.exports = function () {
    return Contato;
}