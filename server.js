var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var noteRouter = require('./route/nodeRoute')
var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.use('/api/v1',noteRouter)



var server = app.listen(8080,function () {
    console.log('server is runing');
})



//nodemon ./server.js localhost 8080