const mongoose = require('mongoose');

// Variável que guarda o modelo que será devolvido
const categorias = mongoose.Schema({

    // Abaixo estão os modelos dos itens que serão devolvidos para consumo
    idCategoria:{
        type: String,
        required:true,
    },
    img:{
        type:String,
        requered:true
    },
    nomeCategoria:{
        type: String,
        required:true,
    }
    
})  

//Export the model
module.exports = mongoose.model('categoria', categorias);