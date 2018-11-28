var mysql = require('mysql');
var connection;

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'h2cwrn74535xdazj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'd1k9gpczngcl4dy4',
        password: 'xvpred4um5lebztr',
        database: 'wq8968a3nb27ujgp'
    });
};

connection.connect();
module.exports= connection;