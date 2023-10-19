const mongoose = require('mongoose');

// Variável que guarda o modelo que será devolvido
const livros = mongoose.Schema({

    // Abaixo estão os modelos dos itens que serão devolvidos para consumo
    chavePrimaria:{
        type:String,
        unique:true,
    },
    nomeLivro:{
        type:String,
        required:true
    },
    sinopse:{
        type:String,
        required:true,
    },
    anoLancamento:{
        type:String,
        required:true
    },
    genero:{
        type:String,
        required:true
    },
    autor:{
        type:String,
        required:true
    },
    img:{
        type:String,
        requered:true
    }
   
})  

//Export the model
module.exports = mongoose.model('livro', livros);