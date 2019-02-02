var mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'new_world'
  });

//creat table for cities and insert info
connection.connect(function(err) {
    if (err) throw err;
    console.log("Database connected successfully!");
  
    var sqlquery = "CREATE TABLE if not exists city(name VARCHAR(100), population VARCHAR(255), country VARCHAR(255))";
    connection.query(sqlquery, function (err, result) {
      if (err) throw err;
      console.log("Table created successfully");
     });
   });
   
   connection.connect(function(err) {
     if (err) throw err;
     console.log("Connected!");
     var sql = "INSERT INTO city (name, population, country) VALUES ?" ;
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
  
   var sqlquery = "CREATE TABLE if not exists country(name VARCHAR(100), population VARCHAR(255), continent VARCHAR(255))";
   
   connection.query(sqlquery, function (err, result) {
   if (err) throw err;
        console.log("Table created successfully");
        console.log(result);
    });
  });
  
  connection.connect(function(err) {
   if (err) throw err;
   console.log("Connected!");
   var sql = "INSERT INTO country (name, population, continent) VALUES ?" ;
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
  
module.exports = connection;