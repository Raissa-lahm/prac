// =====================
// MAPA
// =====================
var map = L.map('map').setView([-30.03, -51.22], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19
}).addTo(map);

// ZONAS DE RISCO
L.circle([-30.03, -51.22], {
  color: 'red',
  radius: 800
}).addTo(map).bindPopup("RISCO EXTREMO");

L.circle([-30.04, -51.20], {
  color: 'yellow',
  radius: 800
}).addTo(map).bindPopup("RISCO MODERADO");

// =====================
// ALERTAS DINÂMICOS
// =====================
const alertasDiv = document.getElementById("alertas");

const alertas = [
  "⚠ Enchente iminente na região central",
  "⚠ Chuva forte nas próximas 2 horas",
  "⚠ Nível do rio em elevação"
];

function atualizarAlertas() {
  alertasDiv.innerHTML = "";

  alertas.forEach(a => {
    const div = document.createElement("div");
    div.className = "alerta vermelho";
    div.innerText = a;
    alertasDiv.appendChild(div);
  });
}

atualizarAlertas();

// =====================
// GRÁFICO (BANCA AMA ISSO)
// =====================
const ctx = document.getElementById('grafico');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Seg", "Ter", "Qua", "Qui", "Sex"],
    datasets: [{
      label: "Risco Climático",
      data: [20, 40, 60, 80, 70],
      borderColor: "red",
      backgroundColor: "rgba(255,0,0,0.2)"
    }]
  }
});

// =====================
// ALERTA AUTOMÁTICO (SIMULA IA)
// =====================
setInterval(() => {
  console.log("Atualizando dados climáticos...");

  const novo = document.createElement("div");
  novo.className = "alerta amarelo";
  novo.innerText = "⚠ Atualização climática automática";

  alertasDiv.prepend(novo);

}, 5000);

// =====================
// BOTÃO SOS
// =====================
document.querySelector(".sos").onclick = () => {
  alert("🚨 Defesa Civil acionada (simulação)");
};