const filePath = "testfile.txt"

let fs = require('fs')

function writeToFile(content){
    fs.appendFile(filePath, content, (err)=>{
        if (err) throw err;
        console.log("file updated!")
    })    
}


let content = "\nhere starts writing to file\nnew line added"
writeToFile(content)
