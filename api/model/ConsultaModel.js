module.exports = function () {
    this.getConsulta = function (connetion, callbeack) {
        connection.query('select * from consulta', callbeack);
        return this;
    }
}