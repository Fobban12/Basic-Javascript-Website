const open = require('open');
open('http://localhost:3000/')


const express = require('express');
const path = require('path');
const app = express();




const port = process.env.PORT ||3000;

app.use(express.static(__dirname + '/res'))

app.get('/',(req, res) => {
    res.sendFile(path.resolve(__dirname,"./res/index.html"));
});

app.all('*', (req, res) => {res.status(404).send("Resource not found")})


app.listen(port,() => console.log("App on port: " + port + "!" + "\nGo to localhost:" + port +" on your browser"))

app.get('/db', async (req, res) => {
    const { Pool } = require('pg');
    const pool = (() => {
    return new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
    rejectUnauthorized: false
    }
    });
    })();
    try {
    const client = await pool.connect();
    const result = await client.query('SELECT user_id, username FROM accounts;');
    const results = { 'results': (result) ? result.rows : null};
    res.json( results );
    client.release();
    } catch (err) {
    console.error(err);
    res.json({ error: err });
    }
    })