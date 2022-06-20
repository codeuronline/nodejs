const express = require('express');
const app = express();
app.listen(5000, () => {
    console.log('Server is listening @5000');
});
let mysql = require('mysql');
console.log('Get connection ...');

var connection = mysql.createConnection({
    database: 'restaurant',
    host: "localhost",
    user: "root",
    password: ""
});
// middleware
app.use(express.json());

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    // Création de la table restaurants
    // Drop EMPLOYEES table if Exists!!
    var sql1 = "DROP TABLE IF EXISTS Restaurants ";
    connection.query(sql1, function (err, results) {
        if (err) throw err;
        console.log("Table Restaurant dropped");
    });
    //creation de la table Restaurant
    var sql2 = "CREATE TABLE Restaurants " +
        "(id INT PRIMARY KEY NOT NULL AUTO_INCREMENT," +
        "Name VARCHAR(255)," +
        "City VARCHAR(100)," +
        "nbCouverts INT(10)," +
        "terrasse VARCHAR(3)" +
        "parking VARCHAR(3)";
    connection.query(sql2, function (err, results) {
        if (err) throw err;
        console.log("Table Restaurant Créée");
    });


    // Création de la table employés
    // Drop EMPLOYEES table if Exists!!
    var sql3 = "DROP TABLE IF EXISTS Employes ";
    connection.query(sql3, function (err, results) {
        if (err) throw err;
        console.log("Table Employés dropped");
    });
    //creation de la table Restaurant
    var sql4 = "CREATE TABLE employes " +
        "(id INT PRIMARY KEY NOT NULL AUTO_INCREMENT," +
        "first_name VARCHAR(100)," +
        "last_name VARCHAR(100)," +
        "hidre_date DATE," +
        "resturant_id INT"

    connection.query(sql4, function (err, results) {
        if (err) throw err;
        console.log("Table Employé Créée");
    });
    connection.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");



        // Route /POST/restaurant
    

        // Route /GET/restaurants


        // Route /GET/restaurants/:id

        // etc
    });

    app.post('/restaurant', (req, res) => {
        let sql = "INSERT INTO restaurants (name,city,nbcouverts,terrasse,parking)" +
            " VALUES ('" + req.body.name + "', '"
            + req.body.city + "', '"
            + req.body.nbcouverts + "', '"
            + req.body.terrasse + "', '"
            + req.body.parking + "')";
    })

    connection.query(sql, function (err, results){
        
    })



});

