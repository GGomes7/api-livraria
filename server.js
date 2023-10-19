const express = require('express')
const app = express()
const mongoose = require("mongoose")
const cors = require('cors')
const conectar_bd = require("./service/conectar_bd")
// Criando variaveis de ambiente
const dotenv = require('dotenv')

const livros = require('./models/livro');
// const categorias = require('./models/categoria');

dotenv.config()

app.use(cors())


// busca verificar a conexão do banco
app.get('/', (req, res) => {
    
    try{

        // Função para conectar ao banco de dados
        conectar_bd()

    }
    catch(error){
        res.status(400).json("Server error!")
        
    } 
    finally{
        res.status(200).json("Server on...")
    }
    

})




// busca todos as informações do banco
app.get('/livros', (req, res) => {

    // Guarda os valores do modelo em uma variável
    let resultado =  livros.find()
    .then(
        (resultado) => {
            if(resultado){
                // Caso dê certo devolve as informações
                res.status(200).send(resultado)
            }
            else{
                res.status(404).json("Resource not found")  // Erro na requisição//
            }
        } 
    )
    .catch((err) =>{
        res.status(500).json("Erro : " + err) // Erro no servidor
    })
})



// busca informações de cada livro pela chave primária
app.get("/search/:chavePrimaria" , (req,res) =>{

    let resultado =  livros.findOne({chavePrimaria: req.params.chavePrimaria})
    .then(
        (resultado) => {
            if(resultado){
                // Caso dê certo devolve as informações
                res.status(200).send(resultado)
            }
            else{
                res.status(404).json("Resource not found")  // Erro na requisição//
            }
        } 
    )
    .catch((err) =>{
        res.status(500).json("Erro : " + err) // Erro no servidor
    })

})

app.listen(console.log("Porta aberta: http://localhost:5000"))
