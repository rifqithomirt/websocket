const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, {cors: {origin: "*"}});
const port = process.env.PORT || 3000;
const room = "data";
setInterval(function(){
  // io.emit( room, message )
  io.emit(room, "Hi World");
}, 2000)

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
