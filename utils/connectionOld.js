// file koneksi lama

const mysql = require('mysql');

var db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'node-app'
});

db.connect(function (err){
    if(err) throw err;
    console.log('Connected to database!');
});

module.exports = db;