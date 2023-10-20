# DOCUMENTAÇÃO api-livraria 

  

# Descrption  

A API de Livraria oferece acesso a uma seleção diversificada de 15 livros, divididos em cinco catálogos distintos, abrangendo uma ampla gama de gêneros literários. Explore esta ferramenta para descobrir obras incríveis e encontrar o livro perfeito para cada preferência de leitura. 

  

# EndPoints  

* **/**  - Conexão primária da interface, indicando se o sistema está ativo/inativo e quais são os caminhos disponíveis para retornar as informações.  

* **/livros** - Retorna todos os livros junto com todas as informações.

* **/categorias** - Retorna todas as categorias de livros.

* **/:chavePrimaria** - Devolve o conjunto de informações no vetor, em que a chave primária esteja específicada para retornar apenas aquelas informações pedidas. 
