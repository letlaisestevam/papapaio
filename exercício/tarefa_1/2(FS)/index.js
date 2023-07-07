const fs = require('fs')
const data = 'Criação de arquivo';
fs.writeFile('teste.txt', data, (err) =>{
    if (err) throw err;
    console.log('Arquivo criado');
});
fs.readFile('teste.txt', (err, data)=>{
    if(err) throw err;
    console.log(data);
});