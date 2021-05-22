let mysql = require('mysql');
let js = require('./config.js');

let connection= mysql.createConnection(js);

//Insert one row at a time

// let sql=`Insert into todos(title,completed)
//             values ('this is the value',true)`;

// connection.query(sql);


//Insert many rows at a time
let sql =`INSERT INTO todos(title,completed)
        VALUES ?`;

let todos=[
    ['Insert many at a time',false],
    ['This is perfeect',true]
];

connection.query(sql, [todos], (err, results, fields)=>{

    if(err)
    console.log(err.message);

    console.log('Row inserted: '+ results.affectedRows);
});


