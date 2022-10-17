const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);
const PORT = 8080;

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

server.listen(PORT, () => {
	console.log(`Success listening of ${PORT}`);
});
