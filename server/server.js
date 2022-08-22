const express = require('express');
const app = express();

const path = require("path");
const http = require("http").Server(app);

// const bodyParser = require("body-parser");
// app.use(bodyParser.json());

app.use(express.urlencoded({extended: true}));
app.use(express.json())

// cross origin resource sharing
const cors = require('cors');
app.use(cors());

// app.use(express.static(__dirname + "../dist/index.html"));

let server = http.listen(3000, function(){
    let host = server.address().address;
    let port = server.address().port;
    console.log("Server started! Server listening on: " + host + " port: " + port);
})


app.post('/login', require("./api/auth.js"));



