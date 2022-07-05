const express = require('express');

const server = express();

server.use(express.json()); //reconhecer json

const users = [{ nome: 'José', email: 'jose@email.com' }, { nome: 'Maria', email: 'maria@email.com' }];

//Retornar um usuário.
//Necessário index (ou id)
server.get('/users/:index', (req, res) => {
  //index vem da rota
  const { index } = req.params; //query params? route params?

  return res.json(users[index]);
});

//Lista de users
server.get('/users', (req, res) => {
  return res.json(users);
});

//Criar novo user
//Necessario json no body (insomnia)
server.post('/users', (req, res) => {
  const { name } = req.body; //corpo da requisicao
  const { email } = req.body;

  users.push({ name, email });

  return res.json(users);
});

//Atualizar dados de user
//Necessario saber id
server.put('/users/:index', (req, res) => { //CHECAR SE FUNCIONA
  const { index } = req.params;

  const { name } = req.body; //corpo da requisicao
  const { email } = req.body;

  users[index] = { name, email };

  res.json(users);
});


//Excluir um usuario
//Necessario index
server.delete('/users/:index', (req, res) => {
  const { index } = req.params;

  users.splice(index, 1);

  return res.json({ message: 'O usuário foi deletado' });

});

server.listen(3000);