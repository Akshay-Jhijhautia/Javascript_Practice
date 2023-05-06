const {createDirectory,creatingJsonFiles,deletingJsonFiles} = require('../problem1Async');
const path1 = require('path');

let path = path1.join(__dirname,'./jsonFiles');

async function randomJsonFiles(){
    try {
        const newDirectoryPath = await createDirectory(path);
        console.log("Directory Created");
        const newJsonfilesPath = await creatingJsonFiles(newDirectoryPath);
        console.log("Multiple Json files created");
        const deletingFiles = await deletingJsonFiles(newJsonfilesPath);
        console.log(deletingFiles);
    } catch (error) {
        console.log(error);
    }
}

randomJsonFiles();