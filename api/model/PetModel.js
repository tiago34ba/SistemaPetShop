module.exports = function (){
    this.getPet= function(connetion, callbeack){
        connection.query('select * from pet',callbeack);
    return this;
}
}