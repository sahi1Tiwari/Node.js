const fs = require('fs');

// -> To create a folde
// fs.mkdir('sahil', (err)=>{
//     console.log('Folder created');
// })

// ->TO create a file at perticular place.
// fs.writeFile('./sahil/bio.txt', "My name is Sahil Tiwari", (err)=>{
//     console.log("File is Created.");
// });

// -> To append the file bio.txt .
// fs.appendFile('./sahil/bio.txt',"My name is Sahil Tiwari and i Have created this file using node.js .", (err)=> console.log("File is appended."));

// -> Reading a file.
// fs.readFile('./sahil/bio.txt', 'utf-8', (err,data)=>console.log(data));
// here we use 'utf-8' because node.js reads the data in the form of buffe or chunks

// -> for renaming a file
// fs.rename('./biodata.txt','./sahil/bio.txt',(err)=>console.log('File is renamed.'))

// -> for deleting a file
// fs.unlink('./sahil/bio.txt', (err)=>console.log('File deleted'));

// -> for deleting a folder
// fs.rmdir('./sahil',(err)=>console.log('Folder deleted'));
