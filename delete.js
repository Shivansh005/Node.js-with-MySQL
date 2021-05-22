let mysql = require('mysql');
let config= require('./config.js');

let conncetion = mysql.createConnection(config);

let sql =`Delete from todos where id=?`;

conncetion.query(sql,1, (err,results,fields)=>{
    if(err)
    return console.error(err.message);

    console.log("Deleted rows: ", results.affectedRows);
});

connection.end();