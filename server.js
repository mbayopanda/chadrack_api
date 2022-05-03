const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.status(200).send('Bonjour tout le monde')
});

app.get('/hello', (req, res, next) => {
  res.status(200).send('Voici rien')
});

app.get('/hello/:name', (req, res, next) => {
  const name = req.params.name;
  res.status(200).send(`Voici ${name}`);
});

app.listen(4000, () => {
  console.log('Server started on port 4000');
});