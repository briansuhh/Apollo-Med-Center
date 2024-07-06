import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'apollomedcenter',
    timezone: '+00:00',
});

export default pool;