# API - OneBitFood

Projeto criado para aprender e ensinar sobre como utilizar a linguagem NestJS, buscando usar uma arquitetura limpa a simples de comunicão via API.

## Qual a funcionalidade do projeto

O projeto tem por objetivo criar uma API de um sistema de pedidos e entrega entre restaurantes e clientes. Ele possui dois usuários, o cliente e o restaurante.

Quando o usuário for um restaurante ele podera: 
* Cadastrar e atualizar seus dados
* Atribuir a ele uma ou mais categorias do tipo de comida que vende
* Cadastrar os produtos que vende e suas categoria.
* Receber pedido de clientes ativos na plataforma. 

Já o cliente pode, por sua vez:
* Cadastrar e atualizar seus dados
* Consultar os restaurantes ativos no sistema
* Realizar pedidos 
* Consultar seu historico de pedidos.

## Como executar o projeto

O projeto já se encontra com um arquivo docker já pré configurado. Ele será responsavel por subir os seguintes containers:

Postgres v.: 13 - Sistema do banco de dados.

Para executar o docker basta usar o comando: 

```
docker compose up -d
```

ou criar o alies a seguir, apontando para a pasta do projeto em sua maquina.

```
dcobf () { docker-compose -f docker-compose.development.yml "$@"; }
```

Para executar a API em sua maquina, dentro da pasta do projeto, executar o seguinte comando:

```
yarn      // para instalar todos os pacotes necessarios
yarn dev // para executar o Nest
```
