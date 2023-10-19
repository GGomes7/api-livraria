const mongoose = require('mongoose');
// const conectar_bd = require("../service/conectar_bd")
const livros = require('./models/livro');
const categorias = require('./models/categoria');

mongoose.Promise = global.Promise;
// conectar_bd()


// Variável para inserir informações no banco de dados
const livro1 = new livros({
    chavePrimaria:"romance1",
    nomeLivro:"É assim que acaba",
    sinopse: "Lily nem sempre teve uma vida fácil, mas isso nunca a impediu de trabalhar arduamente para conquistar a vida tão sonhada. Ela percorreu um longo caminho desde a infância, em uma cidadezinha no Maine: se formou em marketing, mudou para Boston e abriu a própria loja. Então, quando se sente atraída por um lindo neurocirurgião chamado Ryle Kincaid, tudo parece perfeito demais para ser verdade.",
    anoLancamento:"2016",
    genero:"Romance",
    autor:"Colleen Hoover",
    img:"https://m.media-amazon.com/images/I/91r5G8RxqfL._AC_UF1000,1000_QL80_.jpg",
})

const livro2 = new livros({
    chavePrimaria:"romance2",
    nomeLivro:"Orgulho e preconceito",
    sinopse: "Elizabeth Bennet vive com sua mãe, pai e irmãs no campo, na Inglaterra. Por ser uma das filhas mais velhas, ela enfrenta uma crescente pressão de seus pais para se casar. Quando Elizabeth é apresentada ao belo e rico Darcy, faíscas voam. Embora haja uma química óbvia entre os dois, a natureza excessivamente reservada de Darcy ameaça a relação. ",
    anoLancamento:"1813",
    genero:"Romance",
    autor:"Jane Austen",
    img:"https://m.media-amazon.com/images/I/51adYP1B4xL._SY445_SX342_.jpg",
})

const livro3 = new livros({
    chavePrimaria:"romance3",
    nomeLivro:"A culpa é das estrelas",
    sinopse: "Narra o romance de dois adolescentes que se conhecem (e se apaixonam) em um Grupo de Apoio para Crianças com Câncer: Hazel, uma jovem de dezesseis anos que sobrevive graças a uma droga revolucionária que detém a metástase em seus pulmões, e Augustus Waters, de dezessete, ex-jogador de basquete que perdeu a perna para o osteosarcoma. Como Hazel, Gus é inteligente, tem ótimo senso de humor e gosta de brincar com os clichês do mundo do câncer – a principal arma dos dois para enfrentar a doença que lentamente drena a vida das pessoas.",
    anoLancamento:"2012",
    genero:"Romance",
    autor:"John Green",
    img:"https://m.media-amazon.com/images/I/41yToN1cOML._SY445_SX342_.jpg",
})

const livro4 = new livros({
    chavePrimaria:"suspense1",
    nomeLivro:"Morte no internato",
    sinopse: "É um romance de suspense escrito por Lucinda Riley. A história se passa em um internato na Inglaterra, onde um assassinato ocorre, abalando a tranquilidade do ambiente. À medida que o mistério se desenrola, segredos sombrios vêm à tona, e os personagens se veem envolvidos em uma trama de suspense e intriga.",
    anoLancamento:"2021",
    genero:"Suspense",
    autor:"Lucinda Riley",
    img:"",
})

const livro5 = new livros({
    chavePrimaria:"suspense2",
    nomeLivro:"A mulher na janela",
    sinopse: "A história segue Anna Fox, uma mulher agorafóbica que passa os dias observando a vida de seus vizinhos pela janela. Quando testemunha algo perturbador na casa dos novos vizinhos, ela se vê envolvida em um mistério envolvendo segredos obscuros e mentiras.",
    anoLancamento:"2018",
    genero:"Suspense",
    autor:"A. J. Finn",
    img:"https://m.media-amazon.com/images/I/71RqrTxQmpL._AC_UF1000,1000_QL80_.jpg",
})

const livro6 = new livros({
    chavePrimaria:"suspense3",
    nomeLivro:"O Instituto",
    sinopse: "É um livro de ficção científica e suspense escrito por Stephen King. A trama segue um grupo de crianças com habilidades especiais que são sequestradas e levadas para um instituto onde são submetidas a experimentos cruéis. À medida que as crianças tentam resistir e encontrar uma maneira de escapar, eles descobrem segredos perturbadores sobre o propósito do instituto e o alcance dos poderes que possuem.",
    anoLancamento:"2019",
    genero:"Suspense",
    autor:"Stephen King",
    img:"https://m.media-amazon.com/images/I/4177Wy8Lo5L._SY445_SX342_.jpg",
})

const livro7 = new livros({
    chavePrimaria:"distopia1",
    nomeLivro: "Fahrenheit 451",
    sinopse: "O livro apresenta um futuro onde todos os livros são proibidos, o pensamento crítico é censurado e as opniões próprias são consideradas antissociais. O personagem central, Guy Montag, trabalha como 'bombeiro' (o que na história significa 'queimador de livro').",
    anoLancamento : "1953",
    genero:"Distopia",
    autor: "Ray Bradbury",
    img: "https://m.media-amazon.com/images/I/41PVVpQf-sL._SY445_SX342_.jpg",
})

const livro8 = new livros ({
    chavePrimaria :"distopia2",
    nomeLivro: "1984",
    sinopse: "A narrativa revela um futuro distópico em que o Estado é extremamente autoritário e impõe um regime de vigilância sobre a sociedade. Nessa realidade, o partido Ingsoc impõe a vigilância do Grande Irmão, de cujo poder ninguém escapa.",
    anoLancamento: "1949",
    genero: "Distopia",
    autor: "George Orwell",
    img: "https://m.media-amazon.com/images/I/819js3EQwbL._AC_UF1000,1000_QL80_.jpg",
})

const livro9 = new livros ({
    chavePrimaria :"distopia3",
    nomeLivro: "Jogos Vorazes",
    sinopse: "O livro conta a história de uma competição onde são escolhidos dois tributos de cada distrito, de 12 a 18 anos, e eles são levados a uma arena para lutarem até a morte, com apenas um sobrevivente. O vencedor garante grandes benefícios para o seu distrito, além do divertimento dos habitantes da capital do país.",
    anoLancamento: "2008",
    genero: "Distopia",
    autor: "Suzanne Collins",
    img: "https://m.media-amazon.com/images/I/61rzXkz4qAL._AC_UF1000,1000_QL80_.jpg",
})

const livro10 = new livros ({
    chavePrimaria :"poesia1",
    nomeLivro: "Da Poesia",
    sinopse: "É uma coletânea de poemas da renomada escritora brasileira Hilda Hilst. Nesta obra, Hilda explora temas profundos e intimistas, abordando a natureza humana, o amor, a espiritualidade e a busca pelo sentido da vida. Sua escrita é caracterizada por uma linguagem intensa e provocativa, marcando um importante legado na poesia brasileira contemporânea.",
    anoLancamento: "2004",
    genero: "Poesia",
    autor: "Hilda Hilst",
    img: "https://m.media-amazon.com/images/I/41jEKToBPyL._SY445_SX342_.jpg",
})

const livro11 = new livros ({
    chavePrimaria :"poesia2",
    nomeLivro: "A Rosa do Povo",
    sinopse: "É uma das obras mais emblemáticas do poeta brasileiro Carlos Drummond de Andrade. Publicado originalmente em 1945, o livro é uma reflexão sobre a sociedade, a guerra, a política e o cotidiano. Drummond utiliza uma linguagem acessível e, ao mesmo tempo, profundamente poética para abordar temas universais e questões relevantes do seu tempo.",
    anoLancamento: "1945",
    genero: "Poesia",
    autor: "Carlos Drummond de Andrade",
    img: "https://cdn.brasildefato.com.br/media/fa48f35a193682cb00355f236c41acbf.jpg",
})

const livro12 = new livros ({
    chavePrimaria :"poesia3",
    nomeLivro: "Meu corpo Minha casa",
    sinopse: "É um livro de poesia contemporânea escrito pela autora indo-canadense Rupi Kaur. A obra explora temas como feminilidade, amor, trauma, autoaceitação e empoderamento. Rupi Kaur utiliza uma linguagem simples e direta, acompanhada de ilustrações, para criar uma conexão emocional com o leitor e abordar questões profundas e universais.",
    anoLancamento: "2014",
    genero: "Poesia",
    autor: "Rupi Kaur",
    img: "https://m.media-amazon.com/images/I/81ovfY7pHOL._SY522_.jpg",
})

const livro13 = new livros ({
    chavePrimaria :"aventura1",
    nomeLivro: "As aventuras de Robin Hood",
    sinopse: "Quando o rei Ricardo Coração de Leão sai para se juntar às Cruzadas, no século XII, seu maléfico irmão João usurpa o trono inglês. Impiedoso, ele cobra altos impostos para manter suas mordomias e inflige punições àqueles que não obedecem. É nesse contexto que surgem as lendas do cavaleiro Robin Hood, filho de um barão, que se tornou famoso por rebelar-se contra o governante cruel, isolando-se na floresta e formando um exército de homens bons, além de um frade atrapalhado e uma bela e destemida lady, todos dispostos a ajudar a população mais necessitada. ",
    anoLancamento: "2016",
    genero: "Aventura",
    autor: "Ana Maria Machado",
    img: "https://m.media-amazon.com/images/I/51-A43mU2jL._SY445_SX342_.jpg",
})
const livro14 = new livros ({
    chavePrimaria :"aventura2",
    nomeLivro: "O guia do mochileiro das galáxias",
    sinopse: "Esse livro conta as aventuras espaciais do inglês Arthur Dent e de seu amigo Ford Prefect. A dupla escapa da destruição da Terra pegando carona numa nave alienígena, graças aos conhecimentos de Prefect, um E.T. que vivia disfarçado de ator desempregado enquanto fazia pesquisa de campo para a nova edição do Guia do Mochileiro das Galáxias, o melhor guia de viagens interplanetário.",
    anoLancamento: "1979",
    genero: "Aventura",
    autor: "Douglas Adams",
    img: "https://m.media-amazon.com/images/I/41D2p1NDFkL._SY445_SX342_.jpg",
})
const livro15 = new livros ({
    chavePrimaria :"aventura3",
    nomeLivro: "Enola Holmes: o caso do marquês desaparecido",
    sinopse: "Em Enola Holmes: O caso do marquês desaparecido, Enola Holmes — irmã do famoso detetive Sherlock Holmes — descobre no dia de seu aniversário de catorze anos que sua mãe desapareceu. Por conta dessa descoberta, ela embarca em uma viagem a Londres em busca de pistas que indiquem o paradeiro da mãe. Mas nada poderia preparar Enola para o que a espera na cidade grande.",
    anoLancamento: "2020",
    genero: "Aventura",
    autor: "Nancy Springer",
    img: "https://m.media-amazon.com/images/I/51JBLJg6lML._SY445_SX342_.jpg",
})


// Salva as informações dos livros no banco de dados
livros.insertMany([livro1, livro2, livro3, livro4, livro5, livro6, livro7, livro8, livro9, livro10, livro11, livro12, livro13, livro14, livro15])
.then((livroSalvo) => {
    console.log("Livro salvo com sucesso" + livroSalvo)
})
.catch((erro) =>{
    console.log("Erro" + erro)
})

