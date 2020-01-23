const express = require('express');

const SchemeRouter = require('./schemes/scheme-router.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send( "Server up and running!")
});

server.use('/api/schemes', SchemeRouter);

module.exports = server;