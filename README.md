<h3 align="center">
  Api Rest - Node.js
</h3>

<p align="center">Este serviço tem por finalidade calcular os divisores de um número e também quais desses divisores são números primos. 

</p>

## 🔍 Observações
- Existe testes de unidade para o único *endpoint-get* da aplicação, para testar basta rodar `npm run test`;  
- 
- Para verificar a documentação interativa, acesse o [swagger-tools](https://editor.swagger.io/?_ga=2.212359571.625017621.1638732803-424108789.1638572553#) e cole o json que está dentro da pasta **docs** do projeto.

## 👾 Tecnologias
- ⚡ Express — A web framework for Node.js
- 🐳 Docker — Build safer, share wider, run faster

## ✋🏻 Pré-requisitos

- [Node.js](https://nodejs.org/en/download/)
- [Docker](https://docs.docker.com/desktop/windows/install/)
## 💥 Instalação e execução

1. Faça um clone desse repositório;
2. Renomeie o .env-exemple para .env e defina uma porta;
3. Entre na pasta do projeto;
4. Rode `docker-compose up -d` para subir os containers;
5. Importe o [json](https://www.postman.com/collections/26a1eb8eeaf0cfa4dcca) desse repositório no postman(via link);
6. Agora é testar passando um *number* no query params da requisição(coloque a porta definida no .env no endpoint).

## 🤓 Fluxo da aplicação

![Screenshot](/docs/fluxo.png)
