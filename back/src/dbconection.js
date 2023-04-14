const { Pool } = require('pg');
const { readFileSync } = require('fs');
const express = require('express');
const path = require('path');

const configPath = path.join(__dirname, 'config.json');
const config = JSON.parse(readFileSync(configPath, 'utf8'));
const pool = new Pool(config);

const app = express();

const Port =process.env.PORT || 5000;
app.listen(Port, () => {
    console.log('Servidor a la espera de conexiones')
});

pool.connect((err, client, done) => {
    if (err) throw err;

        
    });
