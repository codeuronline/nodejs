const express = require('express');
let mysql = require('mysql');
console.log('Get connection ...');
const app = express();
app.listen(5000, () => {
    console.log('Server is listening @5000');
});


var connection = mysql.createConnection({
    database: 'restaurant',
    host: "localhost",
    user: "root",
    password: ""
});

//creation des table
connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    // Création de la table restaurants
    // Drop EMPLOYEES table if Exists!!
//     var sql1 = "DROP TABLE IF EXISTS Restaurants ";
//     connection.query(sql1, function (err, results) {
//         if (err) throw err;
//         console.log("Table Restaurant dropped");
//     });
//     //creation de la table Restaurant
//     var sql2 = "CREATE TABLE Restaurants " +
//         "(id INT PRIMARY KEY NOT NULL AUTO_INCREMENT," +
//         "name VARCHAR(255)," +
//         "city VARCHAR(100)," +
//         "nbCouverts INT," +
//         "terrasse VARCHAR(3)," +
//         "parking VARCHAR(3)" +
//         ")";
//     connection.query(sql2, function (err, results) {
//         if (err) throw err;
//         console.log("Table Restaurant Créée");
//     });


//      // Création de la table employés
//     //     // Drop EMPLOYEES table if Exists!!
//     var sql3 = "DROP TABLE IF EXISTS Employes ";
//     connection.query(sql3, function (err, results) {
//         if (err) throw err;
//         console.log("Table Employés dropped");
//     });
//     //creation de la table Restaurant
//     var sql4 = "CREATE TABLE employes " +
//         "(id INT PRIMARY KEY NOT NULL AUTO_INCREMENT," +
//         "first_name VARCHAR(100)," +
//         "last_name VARCHAR(100)," +
//         "hidre_date DATE," +
//         "resturant_id INT(10))"

//     connection.query(sql4, function (err, results) {
//         if (err) throw err;
//         console.log("Table Employé Créée");
//     });
});
//res.setHeader('Content-Type', 'text/html');


// middleware
app.use(express.json());
// methode POST
app.post('/restaurant', (req, res) => {
    let sql = "INSERT INTO restaurants (Name,City,nbCouverts,terrasse,parking)" +
       " VALUES ('" + req.body.name + "', '" 
                    + req.body.city + "', '"
                    + req.body.nbCouverts + "', '"
                    + req.body.terrasse + "', '"
                    + req.body.parking  + "')";

    connection.query(sql, function(err, results) {
       if (err) throw err;
       console.log("Insert a record !");
   });
    res.status(200);
});

// method GET
app.get('/restaurants', (req, res) => {
    var sql_template = "Select * from ?? ";
    var replaces = ['restaurants'];

    sql = mysql.format(sql_template, replaces);

    connection.query(sql, function(err, rows) {
        if (err) throw err;
        res.send(rows)
    });
    res.status(200);
    res.write("liste des restaurants");
});

// methode GET:id
app.get('/restaurants/:id', (req, res) => {
    let id = parseInt(req.params.id);
    
    let sql_template = "Select * from ?? WHERE ?? = " + id;
    let replaces = ['restaurants', 'id'];

    sql = mysql.format(sql_template, replaces);

    connection.query(sql, function(err, row, fields) {
        if (err) throw err;
    res.send(row);
});
    res.status(200);
    res.write('Restaurant :'.id);
});
// route put
app.put('/restaurants/:id', (req, res) => {
    let id = parseInt(req.params.id);
    
    // Coder ici la requête
      // Formater la requête
    // Executer la requête

    res.status(200);
})
//route delete
app.delete('/restaurants/:id', (req, res) => {
    let id = parseInt(req.params.id)
    
    // Coder ici la requête
    // Formater la requete
    // Executer la requête

    res.status(200);
    res.write("restaurant supprimé")
})

