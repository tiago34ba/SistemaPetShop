module.exports = function (){
    this.getCompra = function(connetion, callbeack){
        connection.query('select * from compra');
    return this;
}
}