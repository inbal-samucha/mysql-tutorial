import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

 export const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB
}).promise();

async function testConnectionWithQuery() {
  try {
    const [rows] = await pool.query('SELECT 1');
    console.log('Connection successful:', rows);
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
  }
}

testConnectionWithQuery();

