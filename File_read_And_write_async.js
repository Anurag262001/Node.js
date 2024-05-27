const fs = require('fs');
//readfile functions take a relative path of the text file and the callback function (error, data);
const read = fs.readFile('TextFile_async.txt','utf-8',(error,data)=>{
    console.log(data);
}) 
console.log("reading");
//this will remove the pervious data and override the data or text you have written
fs.writeFile('TextFile_async.txt','this is async file of nodejs',()=>{
    console.log("done");
});
//using append the previous data will save and new data will append
fs.appendFile('TextFile_async.txt','my name is anurag',()=>{
    console.log("append done");
})
fs.writeFile('TextFile2_async',`hello this is automatically craeted file using async ${new Date()}`,()=>{
    console.log("created and written");
})


