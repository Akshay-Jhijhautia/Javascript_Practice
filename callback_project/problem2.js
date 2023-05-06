const fs = require('fs');

function fileManipulation(path,callback){
    fs.readFile(path,'utf8',(err,data) => {
        if(err){
            console.log(err);
            return;
        }
        callback(data)
    })
}

function upperCase(data,callback){
    fs.writeFile('./upperCase.txt', data.toUpperCase(), (err) => {
        if(err){
            console.log(err);
            return;
        }
        console.log('Converted text to uppercase and create uppercase.txt');
        callback('./filenames.txt');
    })  
}

function writeUppercaseInFilename(path,callback){
    fs.writeFile(path, 'upperCase.txt ' , (err) => {
        if(err){
            console.log(err);
            return;
        }
        console.log('Wrote uppertext.txt in filename.txt');
        callback('./upperCase.txt');
    })    
}

function readUpperCaseFile(path,callback){
    fs.readFile(path, 'utf8', (err,data) => {
        if(err){
            console.log(err);
            return;
        }
        callback(data);
    })    
}

function splitData(data,callback){
    fs.writeFile('./split.txt', JSON.stringify(data.toLowerCase().split('.')),(err) => {
        if(err){
            console.log(err);
            return;
        }
        console.log('Converted Uppercase to lowercase and split data into sentences and created split.txt');
        callback('./filenames.txt');
    });    
}

function writeSplitToFilename(path,callback){
    fs.appendFile(path, 'split.txt ', (err) => {
        if(err){
            console.log(err);
            return;
        }
        console.log("Wrote split.txt in filename.txt");
        callback('./split.txt')
    }) 
}

function readSplitData(path,  callback){
    fs.readFile(path, 'utf8', (err,data) => {
        if(err){
            console.log(err);
            return;
        }
        callback(data);
    });    
}

function sortData(data, callback){
    fs.writeFile('./sort.txt', JSON.stringify(JSON.parse(data).sort()), (err) => {
        if(err){
            console.log(err);
            return;
        }
        console.log("Sorted the data and created the sort.txt");
        callback('./filenames.txt')
    });    
}

function writeSortToFilename(path,callback){
    fs.appendFile(path, 'sort.txt', (err) => {
        if(err){
            console.log(err);
            return;
        }
        console.log("Written sort.txt in filenames.txt");
        callback('./filenames.txt')
    });    
}

function readingDataFromFilename(path, callback){
    fs.readFile(path, 'utf8', (err,data) => {
        if(err){
            console.log(err);
            return;
        }
        callback(data);
    });    
}

function deletingFiles(data){
    let files = data.split(" ");
    for(let index = 0; index < files.length; index++){
        fs.unlink(files[index], (err) => {
            if(err){
                console.log(err);
                return;
            }
            console.log("Deleted", files[index]);
        })
    }
}
module.exports = {fileManipulation,upperCase,writeUppercaseInFilename,readUpperCaseFile,splitData,writeSplitToFilename,readSplitData,sortData,writeSortToFilename,readingDataFromFilename,deletingFiles};