const {fileManipulation,upperCase,writeUppercaseInFilename,readUpperCaseFile,splitData,writeSplitToFilename,readSplitData,sortData,writeSortToFilename,readingDataFromFilename,deletingFiles} = require('../problem2');

const path1 = require('path');

const path = path1.join(__dirname,'../lipsum.txt');


fileManipulation(path, (normalData)=>{
    upperCase(normalData, (fileNamePath)=> {
        writeUppercaseInFilename(fileNamePath, (upperCaseFilePath) => {
            readUpperCaseFile(upperCaseFilePath, (upperCaseData) =>{
                splitData(upperCaseData, (writeSplitTxtToFile) => {
                    writeSplitToFilename(writeSplitTxtToFile, (splitDataa) => {
                        readSplitData(splitDataa, (data) =>{
                            sortData(data, (sortToFile) => {
                                writeSortToFilename(sortToFile, (readFiles) => {
                                    readingDataFromFilename(readFiles, (fileData) => {
                                        deletingFiles(fileData);
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});