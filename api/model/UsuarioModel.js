module.exports = function (){
    this.getUsuario= function(connetion, callbeack){
        connection.query('select * from usuario', callbeack);
    return this;
}
}

