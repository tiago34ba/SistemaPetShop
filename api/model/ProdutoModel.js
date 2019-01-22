module.exports = function (){
    this.getProduto = function(connetion, callbeack){
        connection.query('select * from produto');
    return this;
}
}