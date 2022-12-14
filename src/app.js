const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);
const fs = require('fs');
const PORT = 3025;

app.use(express.static(__dirname + '/web'));

io.on('connection', (socket) => {
	socket.on('send', (username, message) => {

	});
});

server.listen(PORT, () => {
	console.log(`Success listening of ${PORT}`);
});
