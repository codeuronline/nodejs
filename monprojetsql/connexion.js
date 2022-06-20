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
    // Drop EMPLOYEES table if Exists!!
    var sql1 = "DROP TABLE IF EXISTS Employes ";

    connection.query(sql1, function (err, results) {
        if (err) throw err;
        console.log("Table Employes dropped");
    });

    // Create EMPLOYEES Table.
    var sql2 = "CREATE TABLE Employes " +
                "(id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,"+
                "FirstName VARCHAR(255),"+
                "LastName VARCHAR(255)," +
                "Hire_date DATE)";

    connection.query(sql2, function (err, results) {
        if (err) throw err;
        console.log("Table Employés créée");
    });
    var firstNames = ["John", "Jack", "Paul"];
    var lastNames = ["Hikes", "Smith", "Gates"];
    var hireDates = ["22/10/2001", "11/11/2000", "12/12/1990"];
   // Insert Datas to EMPLOYEES.
    for (var i = 0; i < firstNames.length; i++) {
        
        var theDate = "STR_TO_DATE(\"" + hireDates[i] + "\",'%d/%m/%Y')"
        
        var sql3 = "INSERT INTO Employes(Firstname,LastName,Hire_date) VALUES ('" +
            firstNames[i] + "','" +
            lastNames[i] + "'," +
            theDate + ")";

        connection.query(sql3, function (err, results) {
            if (err) throw err;
            console.log("Insert a record!");
        });
    }
 });

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    // Drop EMPLOYEES table if Exists!!
    var sql1 = "DROP TABLE IF EXISTS Employes ";

    connection.query(sql1, function (err, results) {
        if (err) throw err;
        console.log("Table Employes dropped");
    });

    // Create EMPLOYEES Table.
    var sql2 = "CREATE TABLE Employes " +
                "(id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,"+
                "FirstName VARCHAR(255),"+
                "LastName VARCHAR(255)," +
                "Hire_date DATE)";

    connection.query(sql2, function (err, results) {
        if (err) throw err;
        console.log("Table Employés créée");
    });
    var firstNames = ["John", "Jack", "Paul"];
    var lastNames = ["Hikes", "Smith", "Gates"];
    var hireDates = ["22/10/2001", "11/11/2000", "12/12/1990"];
   // Insert Datas to EMPLOYEES.
    for (var i = 0; i < firstNames.length; i++) {
        
        var theDate = "STR_TO_DATE(\"" + hireDates[i] + "\",'%d/%m/%Y')"
        
        var sql3 = "INSERT INTO Employes(Firstname,LastName,Hire_date) VALUES ('" +
            firstNames[i] + "','" +
            lastNames[i] + "'," +
            theDate + ")";

        connection.query(sql3, function (err, results) {
            if (err) throw err;
            console.log("Insert a record!");
        });
    }
 }); 

