//app.js é o arquivo principal do backend que chama todas as outras funcoes, ela é iniciada pelo server.js

//importar modulos
const express = require("express");
const cors = require("cors");
//require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

//importar rotas
const usuariosRoutes = require("./src/routes/usuarios.routes");

//iniciar rotas importadas
app.use("/usuarios", usuariosRoutes);


//module.exports permite que seja chamado a funcao em outros arquivos
module.exports = app;
