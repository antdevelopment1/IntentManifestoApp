// ============================================
// Database Connection
const pgp = require('pg-promise')({
    query: e => {      
        console.log('QUERY: ', e.query);
        if (e.params) {
            console.log('PARAMS:', e.params);
        }       
    }
});
const db = pgp({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
});
// ============================================

module.exports = db;