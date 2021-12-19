const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
const lodash = require('lodash')

io.on('connection', async (socket) => {
  listUsers()

  // REMOVE THE LINE BELOW TO SEE DIFFERENCE
  socket.broadcast.emit("recv_message", 'Hello world');
});

const listUsers = lodash.throttle(async () => {
  const a = await io.allSockets()
  console.log('Clients: ', a.size)
}, 3000)

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
