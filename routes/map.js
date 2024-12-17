const kumasiBtn = document.querySelector("#kumasi");
const temaBtn = document.querySelector("#tema");
const accraBtn = document.querySelector("#accra");

class Branch {
  constructor() {
    this.zoom = 8;
    this.map = L.map("map").setView(
      [5.728684702600367, 0.01411906641142047],
      this.zoom
    );
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);
  }

  showMap(lat, lng, msg) {
    L.marker([lat, lng])
      .addTo(this.map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
        })
      )
      .setPopupContent(msg)
      .openPopup();
  }

  setMap(lat, lng) {
    this.map.setView([lat, lng], 13, {
      animate: true,
      pan: {
        duration: 2,
      },
    });
  }
}

const temaCoords = [5.728684702600367, 0.01411906641142047];
const accraCoords = [5.602715350356696, -0.18443540353384594];
const kumasiCoords = [6.656084904657923, -1.6209944778444045];
const map = new Branch();

map.showMap(...temaCoords, "Pizza Haven, Tema");
map.showMap(...accraCoords, "Pizza Haven, Accra");
map.showMap(...kumasiCoords, "Pizza Haven, Kumasi");

temaBtn.addEventListener("click", () => {
  map.setMap(...temaCoords);
});
accraBtn.addEventListener("click", () => {
  map.setMap(...accraCoords);
});
kumasiBtn.addEventListener("click", () => {
  map.setMap(...kumasiCoords);
});
