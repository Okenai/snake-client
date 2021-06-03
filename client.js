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

module.exports = {connect};