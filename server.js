var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);

var serialPort = require("serialport");
var Serialport = new serialPort("<PortNumber>", { //PortNumber check
  baudrate: 9600, //Check the arduino rate
  parser: serialPort.parsers.readline("\n")
});

io.on('connect', function(socket) {
  console.log("socket connect");
})

Serialport.on('open', onOpen);
Serialport.on('data', onData);

function onData(data) {
  io.sockets.emit('datavalue', data);
}

function onOpen() {
  console.log("Arduino connected");
}

app.get('/', function(req, res) {
  res.sendfile(__dirname+"/index.html");
})

server.listen(8000, function() {
  console.log("Listening from server");
});