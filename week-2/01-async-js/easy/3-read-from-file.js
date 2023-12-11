const filePath = "testfile.txt"
const encoding = "utf8"

let fs = require('fs')

function readFrmFile(){
    fs.readFile(filePath, encoding, (err, data)=>{
        if (err) 
            throw err
        else{
            console.log(data)
        }
    });
}

function expensiveTask(){
    //expensive task
    let a = 0;
    for(let i = 1; i <= 1000000000; i++){
        a += i
    }
    console.log("below fs")
    console.log(a)
}

readFrmFile()

