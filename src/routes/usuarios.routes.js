const express = require("express");
const router = express.Router();
const controller = require("../controllers/usuarios.controller");

router.post("/", controller.criar);
router.get("/", controller.listar);
router.put("/:id", controller.update);
router.delete("/:id", controller.remover);

module.exports = router;
