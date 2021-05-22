let mysql= require('mysql');
let config = require('./config.js');

let connection = mysql.createConnection(config);

let id= process.argv[2];
let sql =`Select * from todos where id=` +id;

connection.query(sql, (error,results,fields)=>{
    console.log(results);
});

connection.end(err=>{
    if(err)
    console.log(err.message);
});