function Agendamento() {
    this._connection = connection;
}
    Agendamento.prototype.getAgendamento = function (callbeack) {
        this._connection.query('select * from agendamento', callbeack);

    }
    Agendamento.prototype.getAgendamento = function (agendamento, callbeack) {
        this._connection.query('insert into agendamento set ?', agendamento, callbeack)
    }
    Agendamento.prototype.salvarAgendamento = function (agendamento, callback) {
        this._connction.query('insert into agendamento set ?', agendamento, callback)
    }

module.exports = function () {
    return Agendamento;
}
