const express = require('express');
const { Pool } = require('pg');
const fs = require('fs');

const app = express();

const pool = new Pool({
  user: 'root',
  host: 'localhost',
  database: 'database1',
  password: 'password',
  port: 5432,
});

pool.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

app.get('/users', (req, res) => {
  const db = JSON.parse(fs.readFileSync('./db.json', 'utf8'));
  pool.query(`SELECT * FROM ${db.table}`, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});