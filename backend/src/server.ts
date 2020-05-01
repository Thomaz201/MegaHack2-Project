import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Base do Projeto Node!' });
});

app.listen(3333, () => {
  console.log('Servidor Back-End Iniciado na porta 3333! ╰(*°▽°*)╯');
});
