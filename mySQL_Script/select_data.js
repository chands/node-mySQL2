//through this script data will be selected from the mysql table.
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 8090,
    database: 'mytestdb',
    user: 'myUser',
    password: '******'
});

connection.query(
    `SELECT * FROM persons`,
    function(err, result, fields) {
        if(err) {
            console.error(err);
        } else {
            console.log(result);
            console.log(fields);
            // fields contains extra meta data about results, if available
        }
        connection.close();
    }
);

//connection.execute will internally call prepare & query
// If you execute same statement again, it will be picked from a LRU cache
// which will save query preparation time and give better performance
//The LRU caching scheme is to remove the least recently used frame when the cache
//is full and a new page is referenced which is not there in the cache.