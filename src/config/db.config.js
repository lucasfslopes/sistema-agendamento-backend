//MySQL2
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  ssl: {
    rejectUnauthorized: false
  }
});

async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('Conexão com o MySQL realizada com sucesso!');
    connection.release(); // Libera a conexão de volta para a pool    

  } catch (error) {
    console.error('Erro ao conectar no banco de dados:', error.message);
  }
}

testConnection();

module.exports = pool;