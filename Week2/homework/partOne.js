let mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'userPass',
  database: 'new_world',
});

connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});

//Q1 : What is the capital of country X ? (Accept X from user)
let question1 = connection.query(
  'SELECT capital FROM country WHERE country.Name = ?',
  (err, results, fields) => {
    if (err) throw err;
    console.log(results);
  },
);

//Q2 : List all the languages spoken in the region Y (Accept Y from user)

let question2 = connection.query(
  'SELECT DISTINCT countryLanguage.language FROM countryLanguage INNER JOIN country ON countryLanguage.countryCode = country.code WHERE country.Region = ?',
  (err, results, fields) => {
    if (err) throw err;
    console.log(results);
  },
);

//Q3 : Find the number of cities in which language Z is spoken (Accept Z from user)

let question3 = connection.query(
  'SELECT COUNT(*) AS numberOfCities FROM city INNER JOIN countryLanguage ON countryLanguage.countryCode = country.code WHERE countryLanguage.language = ?',
  (err, results, fields) => {
    if (err) throw err;
    console.log(results);
  },
);

//Q4 : Are there any countries that have A) Same official language B) Same region If yes, display those countries. If no, display TRUE or FALSE
let question4 = connection.query(
  'SELECT IF (name FROM country WHERE region IN (SELECT region FROM country GROUP BY region HAVING COUNT(*) > 1 where name = ? AND language IN (SELECT language FROM countryLanguage WHERE isOfficial = "T")),"YES", "NO")',
  (err, results, fields) => {
    if (err) throw err;
    console.log(results);
  },
);

//Q5 : List all the continents with the number of languages spoken in each continent
let question5 = connection.query(
  'SELECT continent, COUNT(language) AS continentLanguage FROM country INNER JOIN countryLanguage ON countryLanguage.countryCode = country.code GROUP BY country.Continent',
  (err, results, fields) => {
    if (err) throw err;
    console.log(results);
  },
);

connection.end(function(err) {
  if (err) {
    return console.log('error:' + err.message);
  }
  console.log('Close the database connection.');
});
