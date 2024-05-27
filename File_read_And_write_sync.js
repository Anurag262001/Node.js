const fs = require('fs');
const data = fs.readFileSync('TextFile_sync.txt','utf-8');
console.log(data);
fs.writeFileSync('TextFile_sync.txt','good morning sharma'); //this will remove the pervious data and override the data or text you have written
fs.appendFileSync('TextFile.txt','wanna have tea'); //using append the previous data will save and new data will append
//to write into another file dynamically
fs.writeFileSync('TextFile2_sync.txt',"this is automatically text file created");