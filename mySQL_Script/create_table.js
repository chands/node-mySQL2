//through this script mysql table will be created.
const mysql = require('mysql2');//get the client

//create the connection to the database: Synchronous task
const connection = mysql.createConnection({//takes an Object.
    host: 'localhost',
    port: 8090,
    database: 'mytestdb',
    user: 'myUser',
    password: '******'
});

//create table Query
connection.query(
    //mysql query
    `CREATE TABLE IF NOT EXISTS persons (
        id INTEGER AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        age INTEGER NOT NULL,
        city VARCHAR(30)
    )`,
    function(err, result) {
        if (err) {
            console.error(err);
        } else {
            console.log('table was created!');
            // results contains rows returned by server
        }
        //must close mysql connection to avoid memory leak & also to free the terminal
        connection.close();
    }
);
