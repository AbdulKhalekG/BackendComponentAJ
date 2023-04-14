const { Pool } = require('pg')
const  helpers  = require('./helpers')
const user_query = require('./query.json').insert_user_query;
const query = require('./query.json').update_user_query;
const select_query = require('./query.json').select_user_query;

const config={
    user:'postgres',
    host:'localhost',
    password:'123',
    database:'sql'
  };

//funciones
const pool = new Pool(config);

//funcion create user
const createuser = async (req, res) => {
    const { nombre, username, correo, clave } = req.body;
    const passwordencriptado = await helpers.encryptPassword(clave)
    const response = await pool.query(user_query, [
        nombre, username, correo, passwordencriptado
    ]);
    console.log(response);
    res.json(response.rows)
}

//funcion modify user
const modifyuser = async (req, res) => {
    const { nombre, username, correo, clave, id_usuario } = req.body;
    const response = await pool.query(query, [nombre, username, correo, clave, id_usuario]);
    console.log(response);
    res.json(response.rows);
}

//funcion searchusername
const searchusername = async (req, res) => {
    const username = req.params.username;
    const response = await pool.query(select_query, [username]);
    console.log(response.rows);
    res.json(response.rows);
}


//funcion searchuserid
const searchuserid = async (req, res) => {
    const id_usuario = req.params.id_usuario;
    const response = await pool.query(search_query, [id_usuario]);
    console.log(response.rows);
    res.json(response.rows);
}


module.exports = {
    createuser,
    modifyuser,
    searchuserid,
    searchusername,



}