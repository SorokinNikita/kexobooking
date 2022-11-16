import { activatePage } from "./activemap.js";

const address = document.querySelector('#address');

const map = L.map('map-canvas')
  .on('load', () => {
    activatePage()
})
  .setView({
    lat: 35.41255,
    lng: 139.41238
  }, 10)

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map)

const mainPinIcon = L.icon({
  iconUrl : './leaflet/img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
})

let marker = L.marker(
  {
    lat: 35.41255,
    lng: 139.41238
  },
  {
    draggable: true,
    icon: mainPinIcon
  }
)
marker.addTo(map)

const sameIcon = L.icon({
  iconUrl : './leaflet/img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
})


const setStartAddress = () => {
  marker.setLatLng([35.41255, 139.41238])
}

address.value = Object.values(marker._latlng)

marker.on('move', (evt) => {
  let cords = Object.values(evt.target.getLatLng());
  address.value = cords[0].toFixed(5) + ', ' + cords[1].toFixed(5);
})

export {marker, setStartAddress, map, sameIcon}
