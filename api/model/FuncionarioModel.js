function Funcionario() {
        this._connection = connection;
}
    Funcionario.prototype.getFuncionario = function (callbeack) {
        this._connection.query('select * from funcionario', callbeack);

    }
    Funcionario.prototype.getFuncionario = function (funcionario,callbeack) {
        this._connection.query('insert into funcionario set ?', funcionario, callbeack)
    }
    Funcionario.prototype.salvarFuncionario = function (funcionario, callback) {
        this._connction.query('insert into funcionario set ?', funcionario, callback)
    }

module.exports = function () {
    return Funcionario;
}