var mysql = require('mysql');
//momentary credentials to access the database (development only)
var con = mysql.createConnection({
  host: "localhost",
  user: "exampleuser",
  password: "secret"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
