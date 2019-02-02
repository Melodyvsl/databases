let mysql = require('mysql');
let db = require ('./db');
let table = require('./creattable');

//creat connection
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'new_world'
});

//connect
connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
 
  console.log('Connected to the MySQL server.');
});
 

//names of countries with population greater than 8 million
connection.connect(function(err) {
  if (err) throw err;
  connection.query("SELECT name FROM country WHERE population >= 8000000", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});


//names of countries that have “land” in their names
connection.connect(function(err) {
  if (err) throw err;
  connection.query("SELECT name FROM country WHERE name LIKE '%land%'", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

//names of the cities with population in between 500,000 and 1 million
connection.connect(function(err) {
  if (err) throw err;
  connection.query("SELECT name FROM country WHERE population BETWEEN 500000 AND 1000000", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

//name of all the countries on the continent ‘Europe’ ?
connection.connect(function(err) {
  if (err) throw err;
  connection.query("SELECT name FROM country WHERE continent ='Europe' ", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});


//List all the countries in the descending order of their surface areas
connection.connect(function(err) {
  if (err) throw err;
  connection.query("SELECT name FROM country ORDER BY SurfaceArea DESC", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

//The names of all the cities in the Netherlands
connection.connect(function(err) {
  if (err) throw err;
  connection.query("SELECT name FROM city WHERE country = Netherlands", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

//the population of Rotterdam 
  connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT population FROM city WHERE name = Rotterdam", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });
  
  //top 10 countries by Surface Area
  connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT Name FROM country ORDER BY SurfaceArea DESC LIMIT 10", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });

  //the top 10 most populated cities
  connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT Name FROM city ORDER BY Population DESC LIMIT 10", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });
  
  //population of the world
  connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT SUM(population) population FROM country", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });

  
  //ends
  connection.end(function(err) {
    if (err) {
    return console.log('error:' + err.message);
  }
  console.log('Close the database connection.');
});



