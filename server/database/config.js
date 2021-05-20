const mysql = require('mysql');

require('dotenv').config({path: '../server/.env'})

const con = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
}

const connection = mysql.createConnection(con);

connection.connect((err)=> {
    if(err) console.log(err)
    else console.log("connected")
})

module.exports = connection;