import mysql from 'mysql2/promise';

const dbConfig = {
    host: "database",
    user: "root",
    database: "games_db",
    password: "0908072244X!",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

const pool = mysql.createPool(dbConfig);

pool.getConnection()
    .then((connection) => {
        connection.release();
        console.log('Connected to MySQL database');
    })
    .catch((err) => {
        console.error('Error connecting to MySQL database', err);
    });

export default pool;
