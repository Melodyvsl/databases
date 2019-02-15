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



let query = connection.query(
  'CREATE TRIGGER after_add_language AFTER INSERT ON countryLanguage FOR EACH ROW BEGIN IF NEW.language (COUNT >= 10) THEN SET @alert = "country with more than ten language"; END;',
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
