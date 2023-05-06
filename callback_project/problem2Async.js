const fs = require('fs');

function fileManipulation(path){
    return new Promise((resolve,reject) => {
        fs.readFile(path,'utf8',(err,data) => {
            if(err){
                reject(err);
            }
            resolve(data);
        })
    })
}

function upperCase(data){
    return new Promise((resolve,reject) => {
        fs.writeFile('./upperCase.txt', data.toUpperCase(), (err) => {
            if(err){
                reject(err);
            }
            resolve('./filenames.txt');
        })  
    })
}

function writeUppercaseInFilename(path){
    return new Promise((resolve,reject) => {
        fs.writeFile(path, 'upperCase.txt ' , (err) => {
            if(err){
                reject(err);
            }
            resolve('./upperCase.txt');
        })    
    })
}

function readUpperCaseFile(path){
    return new Promise((resolve,reject) => {
        fs.readFile(path, 'utf8', (err,data) => {
            if(err){
                reject(err);
            }
            resolve(data);
        })   
    }) 
}

function splitData(data){
    return new Promise((resolve,reject) => {
        fs.writeFile('./split.txt', JSON.stringify(data.toLowerCase().split('.')),(err) => {
            if(err){
                reject(err);
            }
            resolve('./filenames.txt');
        });    
    })
}

function writeSplitToFilename(path){
    return new Promise((resolve,reject) => {
        fs.appendFile(path, 'split.txt ', (err) => {
            if(err){
                reject(err);
            }
            console.log("Wrote split.txt in filename.txt");
            resolve('./split.txt');
        }) 
    })
}

function readSplitData(path){
    return new Promise((resolve,reject) => {
        fs.readFile(path, 'utf8', (err,data) => {
            if(err){
                reject(err);
            }
            resolve(data);
        });  
    })  
}

function sortData(data){
    return new Promise((resolve,reject) => {
        fs.writeFile('./sort.txt', JSON.stringify(JSON.parse(data).sort()), (err) => {
            if(err){
                reject(err);
            }
            resolve('./filenames.txt');
        });    
    })
}

function writeSortToFilename(path){
    return new Promise((resolve,reject) => {
        fs.appendFile(path, 'sort.txt', (err) => {
            if(err){
                reject(err);
            }
            resolve('./filenames.txt');
        });    
    })
}

function readingDataFromFilename(path){
    return new Promise((resolve,reject) => {
        fs.readFile(path, 'utf8', (err,data) => {
            if(err){
                reject(err);
            }
            resolve(data);
        });    
    })
}

function deletingFiles(data){
    return new Promise((resolve,reject) => {
        let files = data.split(" ");
        let promises = [];
        for(let index = 0; index < files.length; index++){
            let promise = new Promise((resolve,reject) => {
                fs.unlink(files[index], (err) => {
                    if(err){
                        reject(err);
                    }
                    resolve(files[index]);
                })
            })
            promises.push(promise);
        }
        Promise.all(promises)
        .then(() => {
            resolve("Deleted all the files")
        })
        .catch((err) => {
            reject(err);
        })
    })
}
module.exports = {fileManipulation,upperCase,writeUppercaseInFilename,readUpperCaseFile,splitData,writeSplitToFilename,readSplitData,sortData,writeSortToFilename,readingDataFromFilename,deletingFiles};