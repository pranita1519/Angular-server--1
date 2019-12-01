var mysql = require("mysql");

function connect()
{
    var connection = mysql.createConnection({
        host:'192.168.2.19',
        user:'root',
        password:'root',
        database :'dacdb',
        port :9099
    })
    connection.connect();
    return connection
}

module.exports = {
    connect :connect
}