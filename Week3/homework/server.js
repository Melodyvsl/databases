var express = require('express');
var bodyParser = require('body-parser');

let app = express();

//App routes and endpoints
let appRoutes = require('./routes/approutes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', appRoutes);

let PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Server is running at ' + PORT);
});
