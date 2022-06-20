let mysql = require('mysql');

console.log('Get connection ...');

var connection = mysql.createConnection({
    database: 'testnodejs',
    host: "localhost",
    user: "root",
    password: ""
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    var replaces = ['Employes'];
    var sql_template = "SELECT * FROM ?? WHERE Hire_date > STR_TO_DATE('20/11/1995','%d/%m/%Y')";
    sql = mysql.format(sql_template, replaces);


    connection.query(sql, function (err, rows, fields) {
        if (err) throw err;
        //console.log(rows[1]);
         for (let index = 0; index < rows.length; index++) {
             console.log(rows[index].FirstName);
             console.log(rows[index].LastName);
             console.log(rows[index].Hire_date);
              //const element = array[index];
          }
   
            //
        });
});

