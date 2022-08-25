/* const express = require('express');

const app = express();

let nextId = 3;
const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

app.use(express.json());

const existingId = (req, res, next) => {
  const id = Number(req.params.id);

  if (teams.some((t) => t.id === id)) {
    return next();
  }
  res.sendStatus(404);
};

app.get("/teams/:id", existingId, (req, res) => {
  res.json(team);
});

 */