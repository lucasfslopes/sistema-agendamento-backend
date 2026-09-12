const supabase = require("../config/db.config");

exports.criar = async (req, res) => {
  const { nome, preco } = req.body;

  if (!nome || !preco) {
    return res.status(400).json({ error: "Nome e preço são obrigatorios." });
  }

  const { data, error } = await supabase
    .from("produto")
    .insert([{ nome, preco }]);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(201).json({ message: "Produto inserido com sucesso!" });

  //res.status(201).json("Rota de criar ok hihi");
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
