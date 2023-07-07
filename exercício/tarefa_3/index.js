const http = require('http')
const fs = require('fs')
const porta = process.env.PORT

const server=http.createServer((req,res) =>{
    fs.appendFile('teste.txt', 'Cinco Dame Tu Cosita captado em camaras', (err)=>{
        if(err) throw err
        console.log('Arquivo Criado')
    })
})
server.listen(porta || 3000, () =>{console.log('Servidor massa')})