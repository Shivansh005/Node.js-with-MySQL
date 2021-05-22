let mysql = require('mysql');
let config = require('./config.js');

let connection = mysql.createConnection(config);

let sql= `Select * from todos where completed=?`;

connection.query(sql,[true],(error,results,fields)=>{

    console.log(results);
});