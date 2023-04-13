const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');

const app = express();
const PORT = process.env.PORT || 5000;
const DB_NAME = 'database.sqlite';

//Criar uma noca conexao com banco de dados sqlite
const db = new sqlite3.Database(DB_NAME,(err) => {
    if (err){
        console.error(err.message);
        throw err;
    }
    console.log('Conectado ao Banco de Dados $(DB_NAME).');

});