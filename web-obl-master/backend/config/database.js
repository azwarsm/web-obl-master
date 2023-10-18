import mysql from "mysql2";

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Gantilah dengan username MySQL Anda
    password: '', // Gantilah dengan password MySQL Anda
    database: 'web-obl', // Gantilah dengan nama database Anda
});

export default db;