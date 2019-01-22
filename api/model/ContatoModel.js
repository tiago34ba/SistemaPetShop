module.exports = function (){
    this.getContato= function (connetion, callbeack){
        connection.query('select * from contato', callbeack);
    return this;
}
}