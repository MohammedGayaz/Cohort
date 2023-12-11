const filePath = "./testfile.txt"
const fs = require('fs').promises


async function readWriteFile(){
    try{
        let data = await fs.readFile(filePath, 'utf-8')
        let modifitedData = data.replace(/ +/g, ' '); // Replace multiple spaces with a single space
        await fs.writeFile(filePath, modifitedData)
        console.log("file updated")
    }
    catch(err){
        console.error(err);
    }   
}

readWriteFile()