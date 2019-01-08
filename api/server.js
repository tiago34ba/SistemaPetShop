var express = require('express');
var app = express();


port = process.env.PORT || 3000;
app.listen(port);
app.get('/', function(req, res) { res.json({PetShop :  'Sistema de PetShop'});
 });
console.log('Message RESTful API server started on: ' + port);

