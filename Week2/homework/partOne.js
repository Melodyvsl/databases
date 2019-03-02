let mysql = require('mysql');

//const connection = mysql.createConnection({
//host: 'localhost',
//user: 'root',
//password: '0011906596',
//database: 'new_world',
//});

/*connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});*/

//Q1 : What is the capital of country X ? (Accept X from user)
let question1 = connection => {
  connection.query(
    'SELECT capital FROM country WHERE country.Name = "Netherlands"',
    (err, results, fields) => {
      if (err) throw err;
      console.log(results);
    },
  );
};

module.exports = {
  question1,
};
