const express = require('express');
let app = express(); // express function

let mysql = require('mysql');
let partOne = require('./partOne');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '0011906596',
  database: 'new_world',
});

connection.connect(function(err) {
  if (err) {
    return console.error('Medoly Error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});

partOne.question1(connection);

connection.end(function(err) {
  if (err) {
    return console.log('error:' + err.message);
  }
  console.log('Close the database connection.');
});

app.listen(3000, function() {
  console.log('server is runing');
});
