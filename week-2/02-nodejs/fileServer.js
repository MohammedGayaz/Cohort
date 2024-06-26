/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */

const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const app = express();


module.exports = app;

// sending files names in json format
app.get("/files", async (req, res)=>{
    try{
        const files = await fs.readdir(path.join(__dirname + "/files"))
        if(files.length === 0 ){
            res.status(500).send()
        }
        else{
            res.status(200).json(files)
        }
    }
    catch (error){
        console.error("Error reading files:", error);
        console.log(error)
        res.status(500).json({ error: 'Failed to retrieve files' });
    }
});


// sending file content 
app.get('/file/:filename', async (req,res)=>{
    const fileName = req.params.filename;
    const filePath = path.join(__dirname + `/files/${fileName}`)
    try {
        let contents = await fs.readFile(filePath, 'utf-8')
        res.status(200).send(contents)
    }
    catch(err){
        res.status(404).send("File not found")
    }
    
})

app.use((req, res)=>{
    res.status(404).send("Route not found")
})

// app.listen(3000,()=>{
// console.log("listeing at port 3000")
// })
