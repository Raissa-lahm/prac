// MAPA

const map = L.map("map").setView([-30.03, -51.22], 12);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "OpenStreetMap",
  maxZoom: 19,
}).addTo(map);

// ÁREAS DE RISCO

L.circle([-30.03, -51.22], {
  color: "red",
  fillColor: "#ff3b3b",
  fillOpacity: 0.5,
  radius: 800
})
.addTo(map)
.bindPopup("🚨 RISCO EXTREMO");

L.circle([-30.04, -51.20], {
  color: "yellow",
  fillColor: "#ffcc00",
  fillOpacity: 0.5,
  radius: 800
})
.addTo(map)
.bindPopup("⚠ RISCO MODERADO");

// ALERTAS

const alertasDiv = document.getElementById("alertas");

const alertas = [
  "⚠ Enchente iminente na região central",
  "⚠ Chuva forte nas próximas 2 horas",
  "⚠ Nível do rio em elevação"
];

function atualizarAlertas() {

  alertasDiv.innerHTML = "";

  alertas.forEach((alerta) => {

    const div = document.createElement("div");

    div.className = "alerta vermelho";

    div.innerText = alerta;

    alertasDiv.appendChild(div);

  });
}

atualizarAlertas();

// GRÁFICO

const grafico = document.getElementById("grafico");

new Chart(grafico, {
  type: "line",

  data: {
    labels: ["Seg", "Ter", "Qua", "Qui", "Sex"],

    datasets: [{
      label: "Risco Climático",

      data: [20, 40, 60, 80, 70],

      borderColor: "#ff3b3b",

      backgroundColor: "rgba(255,59,59,0.2)",

      tension: 0.4,

      fill: true
    }]
  },

  options: {
    responsive: true,

    plugins: {
      legend: {
        labels: {
          color: "white"
        }
      }
    },

    scales: {

      x: {
        ticks: {
          color: "white"
        }
      },

      y: {
        ticks: {
          color: "white"
        }
      }

    }

  }
});

// ALERTAS AUTOMÁTICOS

setInterval(() => {

  const novo = document.createElement("div");

  novo.className = "alerta amarelo";

  novo.innerText = "⚠ Atualização climática automática";

  alertasDiv.prepend(novo);

}, 8000);

// BOTÃO SOS

document.querySelector(".sos").addEventListener("click", () => {

  alert("🚨 Defesa Civil acionada (simulação)");

});