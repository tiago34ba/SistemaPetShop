module.exports = function (){
    this.getEndereco= function(connetion, callbeack){
        connection.query('select * from endereco', callbeack);
    return this;
}
}