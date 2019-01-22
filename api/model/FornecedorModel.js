module.exports = function (){
    this.getFornecedor= function(connetion, callbeack){
        connection.query('select * from fornecedor', callbeack);
    return this;
}
}