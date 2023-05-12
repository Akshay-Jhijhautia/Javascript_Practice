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
            console.log("Converted data to Uppercase and created uppercase.txt")
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
            console.log('Wrote uppertext.txt in filename.txt');
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
            console.log('Converted Uppercase to lowercase and split data into sentences and created split.txt');
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
            console.log("Sorted the data and created the sort.txt");
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
            console.log("Written sort.txt in filenames.txt");
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
    return new Promise((resolve,reject)=>{
        let files = data.split(' ');
        let resFiles = [];
        for(let index = 0; index< files.length; index++){
            let file = new Promise((resolve,reject) => {
                fs.unlink(files[index], (err) => {
                    if(err){
                        reject(err);
                    }
                    resolve(files[index]);
                })
            })
            resFiles.push(file);
        }
        Promise.all(resFiles)
        .then(() => {
            resolve("Deleted all the files");
        })
        .catch((error)=> {
            reject(error);
        })
    })
}
module.exports = {fileManipulation,upperCase,writeUppercaseInFilename,readUpperCaseFile,splitData,writeSplitToFilename,readSplitData,sortData,writeSortToFilename,readingDataFromFilename,deletingFiles};