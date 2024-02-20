require('dotenv').config({ path: './.env.production' })

const mysql = require('mysql');

// Usando as variáveis de ambiente diretamente ou substitua por seus valores reais para teste
const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão ao banco de dados bem-sucedida!');
  connection.end(); // Fecha a conexão
});

