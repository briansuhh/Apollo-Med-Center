// place files you want to import through the `$lib` alias in this folder.
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'infomag',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;
