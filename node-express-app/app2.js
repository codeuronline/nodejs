const monmodule = require("monmodule");
const express = require('express');
const app = express();
app.listen(5060, () => {
console.log('Server is listening @5060');
});

app.get('/hello', function (request, response) {
     monmodule.direBonjour();
     monmodule.direBye();
 })