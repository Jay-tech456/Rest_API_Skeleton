// Declare the express npm for API requests 
import express from "express";

// Declare the fs and path libraries for the file paths

import { fileURLToPath } from "url";
import path from "path";
// declare the body-parser to as a middleware for the post-requests

import bodyParser from "body-parser";



// declare the port #, App funcitons, and directory paths

const port = 3000;
const app = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filepath = path.join(__dirname, "view/index.html");

// Use the body parser to handle reqested body
let data = []; 
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) =>{ 

    res.sendFile(filepath)

})

app.post('/submit', (req, res)=> { 
    data.push(req.body)

    console.log(data);
})


app.listen(port, () => { 

    console.log(`Listening on: ${port}`)
})