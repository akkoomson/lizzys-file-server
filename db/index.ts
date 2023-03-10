const { Client } = require('pg');

const client = new Client({
  ssl: { rejectUnauthorized: false },
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE
});



module.exports = client;