require('dotenv').config();
const open = require('open');
open('http://localhost:4000/')
const express = require('express');
const app = express();




const port = process.env.PORT ||4000;

app.use(express.static(__dirname + '/res'));

//This is for connecting
app.get('/db', async (req, res) => {
    const { Pool } = require('pg');
    const pool = (() => {
if (process.env.NODE_ENV !== 'production') {
        return new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: false
        });
        } 
        else 
        {
        return new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: 
        {
        rejectUnauthorized: false
        }
    });
} })();


//For testing the database tables
try {
        const client = await pool.connect();
        const result = await client.query('SELECT category_id, category_name, subcategories FROM categories');
        const test = await client.query('SELECT test_id,category_id, test_name FROM test');
        const results = { 'Categories': (result) ? result.rows : null};
        const tests = { 'test': (test) ? test.rows : null}
        res.json({results, tests})
        client.release();
    }    
catch (err) 
    {
        console.error(err); 
         res.json({ error: err });
    }

});


app.all('*', (req, res) => {res.status(404).send("404 Not found")});


app.listen(port,() => console.log("App on port: " + port + "!" + "\nGo to localhost:" + port +" on your browser"));

