const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',       
  user: 'root',          
  database: 'campus_db',
  password: 'Kenshu$202' 
});

connection.connect((err) => {
  if (err) {
    console.log('DB connection error:', err);
  } else {
    console.log('Connected to MySQL database!');
  }
});

module.exports = connection;
