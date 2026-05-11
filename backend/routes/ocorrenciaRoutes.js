const express = require("express");

const router = express.Router();

const {
  criarOcorrencia,
  listarOcorrencias,
  buscarPorId
} = require("../controllers/ocorrenciaController");

// CREATE
router.post("/ocorrencias", criarOcorrencia);

// READ ALL
router.get("/ocorrencias", listarOcorrencias);

// READ ONE
router.get("/ocorrencias/:id", buscarPorId);

module.exports = router;