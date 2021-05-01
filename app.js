const express = require('express')
const app = express()
const port = 3000

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "your_mysql_root_password",
    database: "organisation"
});

con.connect(function(err) {
    if (err) throw err;

});

app.get('/api', (req, res) => {

    const responseJson = {
        data: 'Hello World'
    }
    res.send(responseJson)
})

app.get('/api/users', (req, res) => {
    const responseJson = {
        data: 'Hello getting all users!'
    }
    const { getUsers } = require('./src/users/retrieve-users.db')
    getUsers(con).then( (result, error) => {
        console.log(`returning from mysql`)
        console.log(result)
        res.send(result)
    })
})

app.get('/api/users/:id', (req, res) => {

    const userId = req.params.id
    const { getUserById } = require('./src/users/retrieve-users.db')

    getUserById(con, userId).then( (result, error) => {
        res.send(result)
    })
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})