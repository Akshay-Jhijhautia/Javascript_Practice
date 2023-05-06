const {createDirectory,creatingJsonFiles,deletingJsonFiles} = require('../problem1Promise');
const path1 = require('path');

let path = path1.join(__dirname,'./jsonFiles');

createDirectory(path)
    .then((data) => {
        console.log("Directory Created");
        return creatingJsonFiles(data);
    })
    .then((data)=> {
        console.log("created all the files")
        return deletingJsonFiles(data);
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })