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

console.log(question4);
//Q5 : List all the continents with the number of languages spoken in each continent
let question5 = connection.query(
  'SELECT continent, COUNT(language) AS continentLanguage FROM country INNER JOIN countryLanguage ON countryLanguage.countryCode = country.code GROUP BY country.Continent',
  (err, results, fields) => {
    if (err) throw err;
    console.log(results);
  },
);
