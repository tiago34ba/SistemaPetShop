module.exports = function () {
    this.getVendasItens = function (connetion, callbeack) {
        connection.query('select * from vendas_itens', callbeack);
        this.getVendasItens = function (IntensVenda, connetion, callbeack) {
            connection.query('insert into vendas_itens set ?',IntensVenda,callbeack)
        }


        return this;

    }
}