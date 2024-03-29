const { Pool } = require('pg');
require('dotenv').config();
const { db } = require('../keytotheserver/config');
const pool = new Pool({
	user: db.user,
	password: db.password,
	host: db.host,
	port: db.port,
	database: db.database,
});

module.exports = pool;
