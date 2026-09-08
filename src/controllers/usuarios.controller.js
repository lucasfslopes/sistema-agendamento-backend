const pool = require("../config/db.config");

exports.criar = async (req, res) => {
  res.status(201).json("Rota de criar ok hihi");
};

exports.listar = async (req, res) => {
  res.status(201).json("Rota de listar ok hihi");
};

exports.update = async (req, res) => {
  res.status(201).json("Rota de atualizar ok hihi");
};

exports.remover = async (req, res) => {
  res.status(201).json("Rota de remover ok hihi");
};
