# DOCUMENTAÇÃO api-livraria 

**Ao utilizar está API, leia com atenção toda a documentação.**


# Descrição  

A API de Livraria oferece acesso a uma seleção diversificada de 15 livros, divididos em cinco catálogos distintos, abrangendo uma ampla gama de gêneros literários. Explore esta ferramenta para descobrir obras incríveis e encontrar o livro perfeito para cada preferência de leitura. 


# EndPoints  

* `/`  - Conexão primária da interface, indicando se o sistema está ativo/inativo.  

* `/livros` - Retorna todos os livros junto com todas as informações.

* `/categorias` - Retorna todas as categorias de livros.

* `/chavePrimaria` - Devolve o conjunto de informações no vetor, em que a chave primária esteja específicada para retornar apenas aquelas informações pedidas.

# Parameters

### - livros
  Retorna todos os vetores de livros.

### - categorias
  Retorna todos os vetores das categorias.
  
### - chavePrimaria
  Retorna apenas o vetor do livro consultado.


# Response

**Pode retornar objetos JSON com as seguintes propriedades:**

Exemplo das propiedades quando é buscado pela chave primária de um livro
    
  - `id`: id do objeto (valor devolvido mas não utilizado).
  - `chavePrimaria`: nome de identificação do objeto para busca.
  - `nomeLivro`: nome completo do livro.
  - `sinopse`: retorna a sinópse do livro.
  - `anoLancamento`: data de lançamento do livro.
  - `genero`: mostra de qual gênero o livro pertence.
  - `aurtor`: autor e esccritor do livro.
  - `img`: imagem do livro buscado.


Exemplo das propiedades quando é buscado por categorias

  - `id`: id do objeto (valor devolvido mas não utilizado).
  - `idCategoria`: número da categoria.
  - `img`: imagem de um livro de exemplo que pertence a tal categoria.
  - `nomeCategoria`: retorna o nome da categoria.


# Exemplos de Requisição:

`GET /livros` - irá retornar todos os livros

![image](https://github.com/GGomes7/api-livraria/assets/131712288/66f4720a-2db5-4639-b369-978b40ff5406)

`Erro` - mostra uma mensagem de erro ao tentar buscar os livros

![image](https://github.com/GGomes7/api-livraria/assets/131712288/6f10cb0c-64bd-4325-a7eb-8de5b7e01ea8)


`GET /categorias` - irá retornar todas as categorias 

![image](https://github.com/GGomes7/api-livraria/assets/131712288/127deadb-8534-47ac-9ec6-7425da3eab4b)

`Erro` - mostra a mensagem de erro ao tentar buscar as categorias

![image](https://github.com/GGomes7/api-livraria/assets/131712288/1e7bceed-09f3-4884-bab5-fddfd9435468)


`GET /chavePrimaria` - irá buscar o livro pela chave primária

![image](https://github.com/GGomes7/api-livraria/assets/131712288/1c0dce0d-056f-496d-a1ac-53bdbcb1495e)

`Erro` - mostra a mensagem de erro ao tentar buscar o livro pela chave primária

![image](https://github.com/GGomes7/api-livraria/assets/131712288/a82c4d0f-a311-4f6f-9934-12428748bb2b)


# Erros
- `404 Not Found:` Erro na requisição.
- `500 Internal Server Error:` Erro no servidor.


# Diretrizes
A plataforma possui uma média de pedidos por hora, então atenção ao executá-los, são aproximadamente 10 solicitações autorizadas em 10 minutos. Se ultrapassar esse limite você está vulnerável a complicações no recebimento das informações.


# Base URL 
Caso não queira usar esse serviço na sua máquina local, você pode utilizar está API que já está na nuvem. A base URL para todas as requisições da API é:
[base URL](https://vast-flannel-nightgown-fish.cyclic.cloud) 

