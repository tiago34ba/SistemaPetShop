module.exports = function (){
    this.getFuncionario= function(connetion, callbeack){
        connection.query('select * from funcionario', callbeack);
    return this;
}
}