module.exports = function () {
    this.getAgendamento = function (connetion, callbeack) {
        connection.query('select * from agendamento', callbeack);
        this.getAgendamento = function (agendamento, connetion, callbeack) {
            connection.query('insert into agendamento set ?',agendamento,callbeack)
        }


        return this;

    }
}