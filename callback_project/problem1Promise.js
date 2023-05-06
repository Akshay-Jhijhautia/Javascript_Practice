const fs = require('fs');

function createDirectory(path){
    return new Promise((resolve,reject) => {
        fs.mkdir(path, (err) => {
            if(err){
                reject(err);
            }
            resolve(path);
        });
    })
}

function creatingJsonFiles(path){
    return new Promise((resolve,reject) => {
        let files = 10;
        let fileData = [];
        for(let index = 0; index < files; index++){
            let data = new Promise((resolve,reject) => {
                fs.writeFile(`${path}/jsonFile${index}.json`,'Hello World', (err) => {
                    if(err){
                        reject(err);
                    }
                    resolve(`jsonFile${index}.json`);
                })   
            })
            fileData.push(data);
        }
        Promise.all(fileData)
        .then(() => {
            resolve(path);
        }).catch((err) => {
            reject(err);
        })
    })
}

function deletingJsonFiles(path){
    return new Promise((resolve,reject) => {
        let fileData = [];
        let files = 10;
        for(let index = 0; index< files; index++){
            let data = new Promise((resolve,reject) => {
                fs.unlink(`${path}/jsonFile${index}.json`, (err) => {
                    if(err){
                        reject(err);
                    }
                    resolve(`jsonFile${index}.json`)
                });
            })
            fileData.push(data);
        }
        Promise.all(fileData)
        .then(() => {
            resolve("Deleted All the files");
        }).catch((err) => {
            reject(err);
        })
    })
}

module.exports = {createDirectory,creatingJsonFiles,deletingJsonFiles}