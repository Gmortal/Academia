const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/matricula', (req, res) => {
  const dados = req.body;
  console.log('✅ Nova matrícula recebida:', dados);
  res.status(200).send({ mensagem: 'Matrícula recebida com sucesso!' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
