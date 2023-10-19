const mongoose = require('mongoose');
// const conectar_bd = require("../service/conectar_bd")
const categorias = require('./models/categoria');

mongoose.Promise = global.Promise;
// conectar_bd()

// Variável para inserir informações no banco de dados
const categoria1 = new categorias({
    idCategoria: "categoria1",
    img: "https://m.media-amazon.com/images/I/91r5G8RxqfL._AC_UF1000,1000_QL80_.jpg",
    nomeCategoria: "Romance",
})

const categoria2 = new categorias({
    idCategoria: "categoria2",
    img: "https://m.media-amazon.com/images/I/71RqrTxQmpL._AC_UF1000,1000_QL80_.jpg",
    nomeCategoria: "Suspense",
})

const categoria3 = new categorias({
    idCategoria: "categoria3",
    img: "https://m.media-amazon.com/images/I/61rzXkz4qAL._AC_UF1000,1000_QL80_.jpg",
    nomeCategoria: "Distopia",
})

const categoria4 = new categorias({
    idCategoria: "categoria4",
    img: "https://m.media-amazon.com/images/I/41jEKToBPyL._SY445_SX342_.jpg",
    nomeCategoria: "Poesia",
})

const categoria5 = new categorias({
    idCategoria: "categoria5",
    img: "https://m.media-amazon.com/images/I/51-A43mU2jL._SY445_SX342_.jpg",
    nomeCategoria: "Aventura",
})

// Salva as informações da categoria no banco de dados
categorias.insertMany([categoria1, categoria2, categoria3, categoria4, categoria5])
.then((categoriaSalvo) => {
    console.log("Categoria Salva" + categoriaSalvo)
})
.catch((erro) =>{
    console.log("Erro" + erro)
})