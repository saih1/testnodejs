const mysql = require('mysql');

module.exports.getUsers = async (con) => {
    return new Promise((resolve, reject) => {
        con.query("SELECT * FROM user", function (err, result, fields) {
            // if any error while executing above query, throw error
            if (err) throw err;
            // if there is no error, you have the result
            // iterate for all the rows in result
            Object.keys(result).forEach(function(key) {
                const row = result[key];
                console.log(`MY LOG First name of the user is: ${row.first_name}`)
            });
            return resolve(result)
        });
    })
}

module.exports.getUserById = async (con, userId) => {
    return new Promise((resolve, reject) => {
        con.query(`SELECT * FROM user where id=${userId}`, function (err, result, fields) {
            // if any error while executing above query, throw error
            if (err) throw err;
            // if there is no error, you have the result
            // iterate for all the rows in result
            Object.keys(result).forEach(function(key) {
                var row = result[key];
                console.log(`MY LOG First name of the user is: ${row.first_name}`)
            });
            return resolve(result)
        });
    })
}