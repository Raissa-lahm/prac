const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

require("dotenv").config();

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// MONGODB
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB conectado");
})
.catch((erro) => {
    console.log(erro);
});

// FRONTEND
const frontendPath = path.join(__dirname, "../frontend");

app.use(express.static(frontendPath));

// ROTA PRINCIPAL
app.get("/", (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
});

// SERVIDOR
app.listen(4000, () => {
    console.log("Servidor rodando na porta 4000");
});