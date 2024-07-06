import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'apollomedcenter',
    timezone: '+00:00',
});

export default pool;