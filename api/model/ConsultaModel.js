function Consulta() {
    this._connection = connection;
}
    Consulta.prototype.getConsulta = function (callbeack) {
        this._connection.query('select * from consulta', callbeack);

    }
    Consulta.prototype.getConsulta = function (consulta,callbeack) {
        this._connection.query('insert into consulta set ?', consulta, callbeack)
    }
    Consulta.prototype.salvarConsulta = function (consulta,callback) {
        this._connction.query('insert into consulta set ?', consulta, callback)
    }

module.exports = function () {
    return Consulta;
}