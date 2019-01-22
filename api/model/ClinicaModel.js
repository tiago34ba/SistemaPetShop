module.exports = function (){
    this.getClinica = function(connetion, callbeack){
        connection.query('select * from clinica', callbeack);
    return this;
}
}