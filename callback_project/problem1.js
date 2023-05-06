const fs = require('fs');

function createDirectory(path){
    fs.mkdir(path, (err) => {
        if(err){
            console.log(err);
        }
        console.log("Created Directory");
        const noOfJsonFiles = Math.random() * 10;
        for(let index = 0; index < noOfJsonFiles; index++){
            fs.writeFile(`${path}/jsonFile${index}.json`, "check" , (err) => {
                if(err){
                    console.log(err);
                    return;
                }
                console.log(`CreatedJson file ${index}`);
                fs.unlink(`${path}/jsonFile${index}.json`, (err) => {
                    if(err){
                        console.log(err);
                    }
                    console.log(`Deleted file ${index}`)
                }); 
            })  
        }
    })
}

module.exports = createDirectory;