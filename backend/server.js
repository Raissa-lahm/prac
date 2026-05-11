const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const ocorrenciaRoutes = require("./routes/ocorrenciaRoutes");

require("dotenv").config();

const app = express();

//
// MIDDLEWARE
//
app.use(cors());
app.use(express.json());

//
// EJS
//
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//
// ARQUIVOS ESTÁTICOS
//
app.use(express.static(path.join(__dirname, "public")));

//
// ROTAS API (CRUD)
//
app.use("/api", ocorrenciaRoutes);

//
// MONGODB
//
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB conectado"))
.catch((erro) => console.log(erro));

//
// ROTAS PÁGINAS
//
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/dashboard", (req, res) => {
    res.render("dashboard");
});

//
// SERVIDOR
//
app.listen(4000, () => {
    console.log("Servidor rodando na porta 4000");
});