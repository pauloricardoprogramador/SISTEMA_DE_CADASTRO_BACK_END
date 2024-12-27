# Sistema de Cadastro de Usuários | Back-end

Este projeto é uma aplicação completa de cadastro de usuários com autenticação, desenvolvido com Node.js e MongoDB. Os usuários podem se registrar, fazer login e acessar uma área privada com listagem de dados. 

## Tabela de Conteúdos

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Instalação e Uso](#instalação-e-uso)
- [Endpoints da API](#endpoints-da-api)

## Sobre o Projeto

O **Sistema de Cadastro de Usuários** permite que usuários se registrem, façam login e acessem uma área privada com listagem de dados. O sistema utiliza autenticação JWT para segurança, protegendo o acesso a páginas restritas.

## Tecnologias Utilizadas

### Back-end

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework para criação de API.
- **Prisma**: ORM para integração com MongoDB.
- **MongoDB**: Banco de dados para armazenamento de dados.
- **JWT**: Autenticação baseada em JSON Web Tokens.
- **Bcrypt**: Criptografia para senhas.
- **Cors**: Configuração de CORS para controle de acesso.

## Funcionalidades

### Back-end

- **Cadastro de Usuário**: Registro de novos usuários no sistema com criptografia de senha.
- **Autenticação**: Autenticação de usuários com JWT para acesso a áreas protegidas.
- **Paginação de Listagem**: Endpoint seguro para listagem de dados acessível apenas após login.

## Instalação e Uso

### Pré-requisitos

- Node.js e npm instalados
- MongoDB configurado

### Endpoints da API

- POST /auth/register: Cadastro de um novo usuário.
- POST /auth/login: Autenticação do usuário com JWT.
- GET /private/data: Endpoint seguro, acessível apenas por usuários autenticados (página de listagem).

### Clone o repositório

```bash
git clone https://github.com/your-username/repository-name.git
```

## 📄 Licença

- MIT License
- Este projeto é de uso livre e pode ser modificado ou integrado em outros projetos.
