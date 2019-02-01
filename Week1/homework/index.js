let mysql = require('mysql');
let db = require ('./db');

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

  
//creat table for cities and insert info
connection.connect(function(err) {
  if (err) throw err;
  console.log("Database connected successfully!");

  var sqlquery = "CREATE TABLE if not exists cities(name VARCHAR(100), population VARCHAR(255), country VARCHAR(255))";
  connection.query(sqlquery, function (err, result) {
    if (err) throw err;
    console.log("Table created successfully");
   });
 });
 
 connection.connect(function(err) {
   if (err) throw err;
   console.log("Connected!");
   var sql = "INSERT INTO cities (name, population, country) VALUES ?" ;
   const cityInfo = [
     ["Athens", "664.000", "Greece"],
     ["Stockholm", "960.000", "Sweden"],
     ['Paris', '12 million', 'France'],
     ['Beijing', '20 million', 'China'],
     ['Washington DC', '7.6 million', 'United States'],
     ["Copenhagen", "602.000", "Denmark"],
     ["Oslo", "634.000", "Norway"],
     ["Istanbul", "15 million", "Turkey"],
     ["Tokyo", "9.2 million", "Japan"],
     ["Ottawa", "934.000", "Canada"]
  ];
    
   connection.query(sql, [cityInfo], function (err, result) {
     if (err) throw err;
   console.log(" records inserted");
   console.log(result);
 });
});


//creat table for countries and insert info
connection.connect(function(err) {
 if (err) throw err;
 console.log("Database connected successfully!");

 var sqlquery = "CREATE TABLE if not exists countries(name VARCHAR(100), population VARCHAR(255), continent VARCHAR(255))";
 
 connection.query(sqlquery, function (err, result) {
 if (err) throw err;
      console.log("Table created successfully");
      console.log(result);
  });
});

connection.connect(function(err) {
 if (err) throw err;
 console.log("Connected!");
 var sql = "INSERT INTO countries (name, population, continent) VALUES ?" ;
 const countryInfo = [
   ["Egypt", "97.5 million", "Africa"],
   ["Sweden", "9.9 million", "Europe"],
   ["Norway", "5.2 million", "Europe"],
   ["Danmark", "5.7 million", "Europe"],
   ["Finland", "5.5 million", "Europe"],
   ["Russia", "146 million", "Europe"],
   ["Japan", "127 million", "Asia"],
   ["Germany", "81 million", "Europe"],
   ["Argentina", "43 million", "South America"],
   ["Poland", "38 million", "Europe"]
];
  
 connection.query(sql, [countryInfo], function (err, result) {
   if (err) throw err;
 console.log(" records inserted");
});
});


//names of countries with population greater than 8 million
connection.connect(function(err) {
  if (err) throw err;
  connection.query("SELECT name FROM countries WHERE population >= 8,000,000", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});


//names of countries that have “land” in their names
connection.connect(function(err) {
  if (err) throw err;
  connection.query("SELECT name FROM countries WHERE name LIKE '%land%'", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

//names of the cities with population in between 500,000 and 1 million
connection.connect(function(err) {
  if (err) throw err;
  connection.query("SELECT name FROM countries WHERE population BETWEEN 500,000 AND 1,000,000", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

//name of all the countries on the continent ‘Europe’ ?
connection.connect(function(err) {
  if (err) throw err;
  connection.query("SELECT name FROM countries WHERE continent =‘Europe’ ", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});


//List all the countries in the descending order of their surface areas
connection.connect(function(err) {
  if (err) throw err;
  connection.query("SELECT * FROM countries ORDER BY SurfaceArea DESC;", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

//The names of all the cities in the Netherlands
connection.connect(function(err) {
  if (err) throw err;
  connection.query("SELECT name FROM cities WHERE country = Netherlands;", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

//the population of Rotterdam 
  connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT popultion FROM cities WHERE name = Rotterdam;", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });
  
  //top 10 countries by Surface Area
  connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT name FROM countries WHERE SurfaceArea LIMIT 10;", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });

  //the top 10 most populated cities
  connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT MAX population FROM cities LIMIT 10;", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });
  
  //population of the world
  connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT SUM(population) population FROM countries;", function (err, result) {
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



