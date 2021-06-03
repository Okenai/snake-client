const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: "135.23.222.131", // '192.168.0.139'
    port: 50542
  })

  conn.setEncoding("utf8");
  
  conn.on('connect', ()=>{
    conn.write('Name: KKR');
  })
 
  conn.on('data', (data)=>
  console.log(data));

  return conn;
};

console.log("Connecting ...");

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput) 

  return stdin;
};

const handleUserInput = function(input) {
  if (input === '\u0003') {
    process.exit();
  }
}
  
module.exports = {
  connect,
  setupInput,
  handleUserInput
};