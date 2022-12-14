const express = require('express');
const app = express();

app.post('/fail', (req, res) => {
  res.status(200).json({ "Nome": "Thiago Gasparini"  });
});

app.use(express.json());

app.post('/hello', (req, res) => {
  // req.body agora está disponível
  res.status(200).json({ "Nome": "Thiago Gasparini"  });
});

app.use((req, _res, next) => {
  console.log('req.method:', req.method);
  console.log('req.path:', req.path);
  console.log('req.params:', req.params);
  console.log('req.query:', req.query);
  console.log('req.headers:', req.headers);
  console.log('req.body:', req.body);
  next();
});

app.listen(3000, () => { console.log('Ouvindo na porta 3000'); });