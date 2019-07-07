function Compra() {
    this._connection = connection;
}
    Compra.prototype.getCompra = function (callbeack) {
        this._connection.query('select * from compra', callbeack);

    }
    Compra.prototype.getCompra = function (compra,callbeack) {
        this._connection.query('insert into compra set ?', compra, callbeack)
    }
    Compra.prototype.salvarCompra = function (compra,callback) {
        this._connction.query('insert into compra set ?', compra, callback)
    }

module.exports = function () {
    return Compra;
}