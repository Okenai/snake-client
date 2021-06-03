const net = require('net');
const {connect, setupInput, handleUserInput} = require('./client');

connect();
setupInput();
handleUserInput();