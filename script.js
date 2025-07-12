fetch('ubicaciones.json')
  .then(response => response.json())
  .then(ruta => {
    const map = L.map('map').setView([ruta[0].lat, ruta[0].lng], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    let lineCoords = [];
    ruta.forEach((coord, index) => {
      L.marker([coord.lat, coord.lng])
        .addTo(map)
        .bindPopup(`Fecha: ${coord.date}`);
      lineCoords.push([coord.lat, coord.lng]);
    });

    L.polyline(lineCoords, { color: 'blue' }).addTo(map);
  });
