///the entry point for all reindeer apis and routing 

// Supabase for DB

//functionality of the application
//note has items title, body, date
//Note can: : created, deleted, updated
//DB password: Qi8XJX1B6Ylbg8tb

//methods: Create note - POST, Delete

const express = require('express');

const app = express(); // pair express to app variable
const PORT = 3000;

//tell the server to run using app.listen
app.listen (PORT, () =>{
    console.log(`application is live on ${PORT}!`);
});