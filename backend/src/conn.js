import mysql from 'mysql2/promise'

const pool = mysql.createPool({
    host: "appdatabase",
    user: "root",
    database: "games_db",
    password: "0908072244X!",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

export default pool