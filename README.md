# 📚 Biblioteca Online
Um sistema web para gerenciar livros, desenvolvido como parte do Projeto Integrador III do curso de Análise e desenvolvimento de Sistemas pelo Senac-RS.

## 🚀 Status do Projeto
🛠️ Em desenvolvimento

## 🛠️ Tecnologias Utilizadas
- Frontend: HTML, CSS, JavaScript
- Backend: Java
- Banco de Dados: MySQL
- Servidor de Aplicação: Spring Boot
- JPA: Conexão com banco de dados usando JPA

## 🎯 Objetivo do Software
Permitir a visualização, cadastro e busca de livros de forma prática e organizada.

## 📝 Funcionalidades do Sistema
- Visualizar a lista de livros cadastrados.
- Cadastrar novos livros com título, autor e ano de publicação.
- Buscar livros pelo título ou autor.

## 👨‍💻 Time de Desenvolvedores
- Guilherme de Carvalho Gois

## 🔴 Adendos importantes
- O servidor Spring Boot roda na porta 8081.
- O programa tenta inicializar o banco de dados com o usuário registrado nas variáveis do sistema.
- Caso ele não exista, é necessário ajustar o usuário e senha em src/main/resources/application.properties.
- **Exemplo:**
    ```properties
    spring.datasource.username=root
    spring.datasource.password=0000
    ```
- O banco de dados é criado automaticamente caso não exista.
- O projeto acompanha o arquivo "data.sql", que cria e popula a tabela livros ao iniciar (caso não exista e não esteja populada).