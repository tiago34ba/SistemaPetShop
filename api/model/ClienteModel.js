module.exports = function (){
    this.getCliente = function(connetion, callbeack){
        connection.query('select * from cliente',callbeack);
    return this;
}
}