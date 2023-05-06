const path1 = require("path");
const {fileManipulation,upperCase,writeUppercaseInFilename,readUpperCaseFile,splitData,writeSplitToFilename,readSplitData,sortData,writeSortToFilename,readingDataFromFilename,deletingFiles} = require('../problem2Promise.js');

const path = path1.join(__dirname,'../lipsum.txt');


fileManipulation(path)
    .then((data) => {
        return upperCase(data);
    })
    .then((data) => {
        return writeUppercaseInFilename(data);
    })
    .then((data) => {
        return readUpperCaseFile(data);
    })
    .then((data) => {
        return splitData(data);
    })
    .then((data) => {
        return writeSplitToFilename(data);
    })
    .then((data) => {
        return readSplitData(data);
    })
    .then((data) => {
        return sortData(data);
    })
    .then((data) => {
        return writeSortToFilename(data);
    })
    .then((data) => {
        return readingDataFromFilename(data);
    })
    .then((data) => {
        return deletingFiles(data);
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })
