# Javascript---Connecting-Arduino
NodeJS based program that live receiving the data from Arduino

by Won Yong Ha

Edit the server.js file
```javascript
var Serialport = new serialPort("<PortNumber>", { //PortNumber check
  baudrate: 9600, //Check the arduino rate
  parser: serialPort.parsers.readline("\n")
});
```

Install npm

Install socket.io

Install nodeJS

Install angularJS