const mongoose = require("mongoose");

const ocorrenciaSchema = new mongoose.Schema({

  tipo: {
    type: String,
    required: true
  },

  descricao: {
    type: String,
    required: true
  },

  nivelRisco: {
    type: String,
    enum: ["Baixo", "Moderado", "Alto"],
    required: true
  },

  cidade: {
    type: String,
    required: true
  },

  status: {
    type: String,
    default: "Ativo"
  },

  data: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model("Ocorrencia", ocorrenciaSchema);