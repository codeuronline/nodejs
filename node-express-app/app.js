const express = require('express');
let mysql = require('mysql');
const cors = require('cors');
const app = express();

console.log('Get connection ...');

var connection = mysql.createConnection({
    database: "restaurant",
    host: "localhost",
    user: "root",
    password: ""
});

function remplaceDateToBd(mydate) {
    if (mydate == null) {
        var today = new Date();
        var year = today.getFullYear();
        var mouth = today.getMonth()+1;
        var day = today.getDate();
        mydate = year + "/" + mouth + "/" + day;
        console.log("TRAITEMENT => DATE NULL,DATE PAR DEFAULT");
    }
    return mydate;
}
//function detection d'une apostrophe dans l'element
function remplaceToBd(element) {
    if (element.match("'")){
        console.log("TRAITEMENT => APOSTROPHE DETECTEE")
        element = element.split("'").join("''");
    }
    return element;
}
//connect a la bd
connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

// console.log('Get connection ...');
app.listen(5000, () => {
    console.log('Server is listening @5000');
});





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
// });
//res.setHeader('Content-Type', 'text/html');


// middleware
app.use(cors());
app.use(express.json());


/*************************************************************************
*
*                              Methode POST
*
**************************************************************************/

// Chemin d'acces : POST /restaurant
// Ajout d'un Restaurant 
app.post('/restaurant', (req, res) => { 
    // requete
    // traitement de l'insertion d'une apostrophe pour les chaines de caracteres
    req.body.name = remplaceToBd(req.body.name);
    req.body.city = remplaceToBd(req.body.city);
    // on verifie que le choix pour parking et terrasse n 'a pas renvoye null
    req.body.terrasse =(req.body.terrasse == null) ? "non" :req.body.terrasse;
    req.body.parking = (req.body.parking == null) ? "non" : req.body.parking;        
    let sql = "INSERT INTO restaurants (name,city,nbCouverts,terrasse,parking)" +
       " VALUES ('" + req.body.name + "', '" 
                    + req.body.city + "', '"
                    + req.body.nbCouverts + "', '"
                    + req.body.terrasse + "', '"
                    + req.body.parking  + "')";
    // executer la requete
    connection.query(sql, function(err, results) {
        if (err) throw err;
        console.log("POST => RESTAURANT");
       console.log("TRAITEMENT => RESTAURANT AJOUTE");
   });
    res.status(200);
});


// Chemin d'acces : POST /employe
// Ajout d'un employe dans un Restaurant idResto

app.post('/employe', (req, res) => {
    // requete
    // Traitements de l'insertion d'une apostrophe pour les chaines de caracteres
    req.body.first_name = remplaceToBd(req.body.first_name);
    req.body.last_name = remplaceToBd(req.body.last_name);
    // Traitement des dates
    //console.log(req.body.hire_date);
    req.body.hire_date = remplaceDateToBd(req.body.hire_date);
    let sql_insert= "INSERT INTO ?? (first_name,last_name,hire_date,restaurant_id)" +
       " VALUES('"  + req.body.first_name+ "','"
                    + req.body.last_name + "', '"
                    + req.body.hire_date + "', '"
                    + req.body.restaurant_id 
        + "')";
    // formater la requete
    var replaces = ['employes'];
    sql = mysql.format(sql_insert, replaces);
    // executer la requete
    connection.query(sql, function(err, results) {
        if (err) throw err;
        console.log("POST => EMPLOYE");
        console.log("TRAITEMENT => EMPLOYE AJOUTE");
    });
    res.status(200);
});


// Chemin d'acces : POST /restaurants/: idResto /employe
// Ajout d'un employe dans un Restaurant idResto
app.post('/restaurants/:idResto/employe',(req,res)=>{
    let idResto = parseInt(req.params.id);
    // requete
    let sql_insert= "INSERT INTO ?? (first_name,last_name,hire_date,restaurant_id)" +
       " VALUES('"  + req.body.first_name+ "','"
                    + req.body.last_name + "', '"
                    + req.body.hire_date + "', '"
                    + idResto
        + "')";
    // formater la requete
    var replaces = ['employes'];
    sql = mysql.format(sql_insert, replaces);
    // executer la requete
    connection.query(sql, function(err, results) {
        if (err) throw err;
        console.log("POST => EMPLOYE de RESTAURANT");
        console.log("TRAITEMENT => EMPLOYE AJOUTE POUR LE RESTAURANT : "+idResto);
    });
    res.status(200);
});

/*************************************************************************
*
*                               Methode GET
*
**************************************************************************/

// Chemin d'acces : GET /restaurants
// Acces à Tous les Restaurants
app.get('/restaurants', (req, res) => {
    // requete
    var sql_template = "Select * from ?? ";
    // formater la requete
    var replaces = ['restaurants'];
    sql = mysql.format(sql_template, replaces);
    // executer la requet
    connection.query(sql, function(err, rows) {
        if (err) throw err;
        console.log("GET => RESTAURANTS");
        res.send(rows)
    });
    res.status(200);
    

});

// Chemin d'acces : GET /employes
// Acces à Tous les employé(s)
app.get('/employes', (req, res) => { 
    var sql_special = "SELECT * FROM employes ";
    connection.query(sql_special, function(err, rows) {
        if (err) throw err;
        console.log("GET => EMPLOYES");
        res.send(rows)
    });
    res.status(200);
});

// Chemin d'acces : GET /restaurant/: idResto /employes
// Acces à Tous les employé(s) d'un restaurant idResto

app.get('/restaurant/:idResto/employes', (req, res) => {
    var idResto = parseInt(req.params.idResto);
    // requete
    var sql_template = "SELECT *,name,city FROM employes JOIN restaurants ON id_restaurant = "+idResto+" WHERE  employes.restaurant_id="+idResto;
    // formater la requete
    var replaces = ['employes','restaurants'];
    sql = mysql.format(sql_template, replaces);
    // executer la requete
    connection.query(sql, function(err, rows) {
        if (err) throw err;
       console.log("GET => EMPLOYE de RESTAURANT");
        res.send(rows)
    });
    res.status(200);
    

});

// Chemin d'acces : GET /restaurant/: id
// Accès à un Restaurant id
app.get('/restaurant/:id', (req, res) => {
    let id = parseInt(req.params.id);
    // requete
    let sql_template = "SELECT * FROM ?? WHERE ?? = " + id;
    // formater la requete
    let replaces = ['restaurants', 'restaurant'];
    sql = mysql.format(sql_template, replaces);
    // executer la requete
    connection.query(sql, function(err, row, fields) {
        if (err) throw err;
        console.log("GET => RESTAURANT "+id);
        res.send(row);
});
    res.status(200);
});

// // Chemin d'acces : GET /restaurants/: idResto /employe/: idEmploye
// // Accès à un employé idEmploye d'un restaurant idResto
// app.get('/restaurant/:idResto/employe/:idEmploye', (req, res) => {
//     let idEmploye = parseInt(req.params.idEmploye);
//     let idResto = parseInt(req.params.idResto);
//     // requete
//     var sql_template = "SELECT * FROM ?? WHERE ??=" +
//         idEmploye + " AND ?? =" + idResto;
//     // formater requete
//     var replaces = ['employes', 'id_employe', 'restaurant_id'];
//     sql = mysql.format(sql_template, replaces);
//     // executer la requete
//     connection.query(sql, function (err, rows) {
//         if (err) throw err;
//         res.send(rows)
//     });
//     res.status(200);
// })

/*************************************************************************
*
*                                Methode PUT
*
**************************************************************************/

// Chemin d'acces : PUT /restaurants/: idResto 
// Modification d'un restaurant idResto
app.put('/restaurants/:idResto', (req, res) => {
    let idResto = parseInt(req.params.idResto);
    // Requête
    let sql_update = "UPDATE ?? SET  name ='" + req.body.name +
        "',city='" + req.body.city +
        "',nbCouverts='" + req.body.nbCouverts +
        "',parking='" + req.body.parking +
        "',terrasse='" + req.body.terrasse +
        "' WHERE ?? = " + idResto;
    // Formater la requête
    let replaces = ['restaurants', 'id'];
    sql = mysql.format(sql_update, replaces);
    // Executer la requête
    connection.query(sql, function(err, row, fields) {
        if (err) throw err;
       console.log("UPDATE => RESTAURANT "+idResto);
        res.send(row);
    });
    res.status(200);
})
// Chemin d'acces : PUT /restaurants/: idResto /employes/:idEmploye
// Modification d'un employe IdEmploye dans un restaurant idResto
app.put('/restaurants/:idResto/employes/:idEmploye', (req, res) => {
    let idEmploye = parseInt(req.params.idEmploye);
    let idResto = parseInt(req.params.idResto);
    let sql_update = "UPDATE ?? SET first_name ='" + req.body.first_name +
                                    "',last_name='" + req.body.last_name +
                                    "',hire_date='" + req.body.hire_date +
                                    " WHERE ?? = " + idResto;
                                    " AND ?? = " + idEmploye;
    let replaces = ['employes', 'restaurant_id', 'id'];
    sql = mysql.format(sql_update, replaces);
     // Executer la requête
    connection.query(sql, function(err, row, fields) {
        if (err) throw err;
        console.log("UPDATE => EMPLOYE "+idEmploye+" DE RESTAURANT "+idResto );
        res.send(row);
});
    res.status(200);
})
/*************************************************************************
*
*                               Methode DELETE
*
**************************************************************************/
// Chemin d'acces : DELETE /restaurants/ :id
// Suppression d'un restaurant id et de tous ces employés rattachés
app.delete('/restaurant/:id', (req, res) => {
    let id = parseInt(req.params.id);
    // Coder ici la requête
    let sql_delete_restaurant = "DELETE FROM ?? WHERE ?? = " + id;
    // Formater la requete
    let replaces = ['restaurants', 'id_restaurant'];
    sql1 = mysql.format(sql_delete_restaurant, replaces);    
    console.log(sql1);
    // Executer la requête
    connection.query(sql1, function (err, row, fields) {
        if (err) throw err;
        console.log("DELETE => RESTAURANT "+id)
        //res.send(row);
    });
    //suppression des employe(s) lié à ce Restaurant
    let sql_delete_employe= "DELETE FROM ?? WHERE ?? = " + id
    let replaces_employes = ['employes', 'restaurant_id'];
        
    sql2 = mysql.format(sql_delete_employe, replaces_employes);    
    // Executer la requête
    console.log(sql2);
    connection.query(sql2, function(err, row, fields) {
        if (err) throw err;
        console.log("DELETE => EMPLOYES LIES AU RESTAURANT "+id)
        res.send(row);
    });
    res.status(200);
})
// Chemin d'acces : DELETE /restaurants/ :idResto /employes/: idEmploye
// Suppression d'un restaurant id et de tous ces employés rattachés
app.delete('/restaurants/:idResto/employe/:idEmploye', (req, res) => {
    let idEmploye =parseInt(req.params.idEmploye);
    let idResto = parseInt(req.params.idResto);
    let sql_delete = "DELETE FROM ?? WHERE ?? =" + idResto 
    " AND ?? = " + idEmploye;
    let replaces = ['employes', 'restaurant_id', 'id_employe'];
    sql = mysql.format(sql_delete, replaces);    
    console.log(sql);
    // Executer la requête
    connection.query(sql, function(err, row, fields) {
        if (err) throw err;
        console.log("DELETE => EMPLOYE "+ idEmploye+" LIE AU RESTAURANT "+idResto)
        res.send(row);
    });
    res.status(200);
})
// Chemin d'acces : DELETE /employes/: id
// Suppression d'un employé idEmploye connu
app.delete('/employes/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let sql_delete = "DELETE FROM ?? WHERE ?? = " + id;
    let replaces = ['employes', 'id_employe'];
    sql = mysql.format(sql_delete, replaces);   
    console.log(sql);
    // Executer la requête
     connection.query(sql, function(err, row, fields) {
         if (err) throw err;
         console.log("DELETE => EMPLOYE " + id);
         res.send(row);
     });
    res.status(200);
})
