const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

async function conectar_bd(){
    mongoose
        // Link do banco de dados
        .connect(
           `mongodb+srv://api-atila:senai115@cluster0.ws0boao.mongodb.net/?retryWrites=true&w=majority`,
           {dbName: "api-livros"
        })

        .then(() => {
            console.log("Conectado com sucesso")  // Confirma a conexão
    
        })
        .catch((err) => console.log('erro: ' + err))}  // Informa o erro

module.exports = conectar_bd()
