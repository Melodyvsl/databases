var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'secret',
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('Connected!');
  connection.query('CREATE DATABASE if not exists world', function(err, result) {
    if (err) throw err;
    console.log('Database created');
  });
});

module.exports = connection;
s;
