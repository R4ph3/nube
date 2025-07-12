// Coordenadas simuladas (últimas ubicaciones conocidas)
const ruta = [
    {lat: 18.5, lng: -103.0},
    {lat: 18.7, lng: -104.5},
    {lat: 19.0, lng: -106.2},
    {lat: 19.3, lng: -108.0},
    {lat: 19.5, lng: -109.7}
];

const map = L.map('map').setView([19.0, -106.2], 5);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Dibujar ruta
let lineCoords = [];
ruta.forEach((coord, index) => {
    L.marker([coord.lat, coord.lng]).addTo(map)
        .bindPopup("Posición #" + (index + 1));
    lineCoords.push([coord.lat, coord.lng]);
});

L.polyline(lineCoords, {color: 'blue'}).addTo(map);
