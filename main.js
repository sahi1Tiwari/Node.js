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
fs.appendFile('./sahil/bio.txt',"My name is Sahil Tiwari and i Have created this file using node.js .", (err)=> console.log("File is appended."));