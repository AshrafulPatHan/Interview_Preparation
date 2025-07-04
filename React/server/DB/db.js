const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // or 'root' if not creating a new user
    password: 'Ashraful@39', // or root password
    database: 'testAuth'
});


connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err.stack);
        return;
    }
    console.log('Connected to database as id ' + connection.threadId);
});


module.exports = connection;
