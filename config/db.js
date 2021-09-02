const { Pool } = require('pg');

const configConnection = {
    host: 'localhost',
    user: 'postgres',
    password: 'malow9204',
    database: 'postgres',
    port: '5432'
};    

const db = new Pool( configConnection );
module.exports = { db };