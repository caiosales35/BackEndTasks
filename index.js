const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Iniciando projeto");
});

app.listen(3000, () => {
  console.log("Backend rodando...");
});
