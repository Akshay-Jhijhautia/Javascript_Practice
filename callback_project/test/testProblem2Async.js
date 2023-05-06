const {fileManipulation,upperCase,writeUppercaseInFilename,readUpperCaseFile,splitData,writeSplitToFilename,readSplitData,sortData,writeSortToFilename,readingDataFromFilename,deletingFiles} = require('../problem2Async');
const path1 = require('path');

const path = path1.join(__dirname,'../lipsum.txt');

async function files(){
    try {
        const fileData = await fileManipulation(path);
        console.log("Read data from lipsum text file");
        const fileNamePath = await upperCase(fileData);
        console.log("Converted data to Uppercase and created uppercase.txt");
        const upperCaseFilePath = await writeUppercaseInFilename(fileNamePath);
        console.log('Wrote uppertext.txt in filename.txt');
        const upperCaseData = await readUpperCaseFile(upperCaseFilePath);
        console.log("Read data of upper case from uppercase txt");
        const fileNamePath1 = await splitData(upperCaseData);
        console.log('Converted Uppercase to lowercase and split data into sentences and created split.txt');
        const splitTxtPath = await writeSplitToFilename(fileNamePath1);
        console.log("Written split.txt into filename.txt");
        const splitTxtData = await readSplitData(splitTxtPath);
        console.log("Read contents of split data from split.txt");
        const fileNamePath2 = await sortData(splitTxtData);
        console.log("Sorted the data and created the sort.txt");
        const fileNamePath3 = await writeSortToFilename(fileNamePath2);
        console.log("Written sort.txt in filename.txt");
        const filenames = await readingDataFromFilename(fileNamePath3);
        console.log("Read the data from filenames.txt");
        const deletingAllTheFiles = await deletingFiles(filenames);
        console.log(deletingAllTheFiles);
    } catch (error) {
        console.log(error);
    }   
}

files();