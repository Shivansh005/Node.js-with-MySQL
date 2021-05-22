let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todo'
});

connection.connect((err) =>{
    if(err)
    console.log('error '+ err.message);

    else
    console.log(`Connected to the database`);

    let createTodos =`create table if not exists todos(
        id int primary key auto_increment,
         title varchar(255)not null,
         completed tinyint(1) not null default 0
    )`;

    connection.query(createTodos, (err, results, fields)=>{
            if(err)
            return console.log(error.message);
    });

    connection.end( err =>{
        if(err)
        console.log(error.message);
    });
});

