// MAPA

const map = L.map('map').setView([-29.6783, -50.7833], 10);

L.tileLayer(
'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
{
  attribution: '&copy; OpenStreetMap &copy; CARTO'
}).addTo(map);

// TAQUARA

L.circle([-29.6783, -50.7833], {
  color: '#ef4444',
  fillColor: '#ef4444',
  fillOpacity: 0.4,
  radius: 3500
})
.addTo(map)
.bindPopup(`
<b>Taquara</b><br>
Risco elevado de enchentes.<br>
Nível do rio acima do normal.
`);

// PAROBÉ

L.circle([-29.6286, -50.8347], {
  color: '#facc15',
  fillColor: '#facc15',
  fillOpacity: 0.4,
  radius: 3000
})
.addTo(map)
.bindPopup(`
<b>Parobé</b><br>
Estado de atenção para chuva intensa.
`);

// IGREJINHA

L.circle([-29.5744, -50.7902], {
  color: '#22c55e',
  fillColor: '#22c55e',
  fillOpacity: 0.4,
  radius: 2500
})
.addTo(map)
.bindPopup(`
<b>Igrejinha</b><br>
Área monitorada sem risco crítico.
`);

// IA TYPEWRITER

const texto =
`Analisando dados pluviométricos...

Aumento de 18% na probabilidade
de alagamentos na região do
Vale do Paranhana.

Sistema recomenda estado
de atenção preventiva
nas próximas 2 horas.`;

let i = 0;

function escrever() {

  if(i < texto.length) {

    document.getElementById("typewriter")
    .innerHTML += texto.charAt(i);

    i++;

    setTimeout(escrever, 35);
  }
}

escrever();

// SOS

document.querySelector(".sos-btn")
.addEventListener("click", () => {

  alert(`
Defesa Civil: 199

SAMU: 192

Bombeiros: 193
  `);

});