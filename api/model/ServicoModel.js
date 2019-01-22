module.exports = function (){
    this.getServico= function(connetion, callbeack){
        connection.query('select * from servico', callbeack);
    return this;
}
}