const { Client } = require('pg');
const fs = require('fs');

function connectToDB() {
  // Read the contents of config.json
  let rawdata = fs.readFileSync('config.json');
  let config = JSON.parse(rawdata);

  // Create a new PostgresSQL client with the config settings
  const client = new Client({
    user: config.username,
    host: config.host,
    database: config.database,
    password: config.password,
    port: config.port,
  });

  // Connect to the database
  client.connect();

  return client;
}

module.exports = {
  connectToDB: connectToDB
};