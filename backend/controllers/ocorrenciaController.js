const Ocorrencia = require("../models/Ocorrencia");

// CREATE
exports.criarOcorrencia = async (req, res) => {

  try {

    const nova = new Ocorrencia(req.body);

    await nova.save();

    res.status(201).json({
      mensagem: "Ocorrência registrada com sucesso",
      ocorrencia: nova
    });

  } catch (err) {

    res.status(500).json({ erro: err.message });

  }

};

// READ (LISTAR TODAS)
exports.listarOcorrencias = async (req, res) => {

  try {

    const dados = await Ocorrencia.find()
      .sort({ data: -1 });

    res.json(dados);

  } catch (err) {

    res.status(500).json({ erro: err.message });

  }

};

// READ (UMA OCORRÊNCIA)
exports.buscarPorId = async (req, res) => {

  try {

    const dado = await Ocorrencia.findById(req.params.id);

    res.json(dado);

  } catch (err) {

    res.status(500).json({ erro: err.message });

  }

};