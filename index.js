const express = require("express");
let routesU = require('./routes/users');
let routesI = require('./routes/index')

let app = express();
app.use('/users', routesU);
app.use(routesI)

app.listen(3000, "127.0.0.1", ()=>{

    console.log("Servidor rodando!");

})