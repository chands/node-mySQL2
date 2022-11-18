//through this script data will be inserted into the mysql table.
const mysql = require('mysql2');
const process = require('process');
//'process.argv' property returns an array containing the arguments
//passed to the process when run it in the command line. The first
//element is the process execution path(node) and the second element is the
//path for the (current)js file.
const insert = {
    name: process.argv[2],
    age: process.argv[3],
    city: process.argv[4]
}

const connection = mysql.createConnection({
    host: 'localhost',
    port: 8090,
    database: 'mytestdb',
    user: 'myUser',
    password: '******'
});

connection.query(
    `INSERT INTO persons (name, age, city) VALUES (
        '${insert.name}', ${insert.age}, '${insert.city}'
    )`,
    function(err, result) {
        if(err) {
            console.error(err);
        } else {
            console.log(result);
            console.log('Inserted successfully');
        }
        connection.close();
    }
);