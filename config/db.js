const {createPool} =require('mysql');
const pool=createPool({
    host:'xinovacdb.mysql.database.azure.com',
    user:'xinovacadmin@xinovacdb',
    password:'BUmeetingroom436',
    port:3306,
    database:'data'
});

pool.getConnection((err)=>{
    if (err) {
        console.log('Error connecting to db...');
    }
    console.log('Connected to db');
});

module.exports = pool;
