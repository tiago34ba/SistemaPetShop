function Clinica() {
        this._connection = connection;
}
    Clinica.prototype.getClinica = function (callbeack) {
         this._connection.query('select * from clinica', callbeack);

    }
    Clinica.prototype.getClinica = function (clinica,callbeack) {
        this._connection.query('insert into clinica set ?', clinica, callbeack)
    }
    Clinica.prototype.salvarClinica = function (clinica,callback) {
        this._connction.query('insert into clinica set ?', clinica, callback)
    }

module.exports = function () {
    return Clinica;
}