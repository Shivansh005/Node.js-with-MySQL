let mysql= require('mysql');
let config = require('./config.js');

//created connection
let connection = mysql.createConnection(config);

//creating the query
let query=`Select * from todos`;

//running the query
connection.query(query,(err,results,fields)=>{
    if(err)
    console.log(err.message);

    console.log(results);
});

//closing the databse
connection.end(err=>{
    console.log("Database connection disconnected");
});