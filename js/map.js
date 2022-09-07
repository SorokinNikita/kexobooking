import {declarationsArray} from './data.js'
import { blocks } from './declaraitions.js';
const adForm = document.querySelector('.ad-form');
let inditifycationMap = Boolean;
const map = L.map('map-canvas')
  .on('load', () => {
  inditifycationMap = true;
})
  .setView({
    lat: 35.41255,
    lng: 139.41238
  }, 10);

  L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl : './leaflet/img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
})

const marker = L.marker(
  {
    lat: 35.41255,
    lng: 139.41238
  },
  {
    draggable: true,
    icon: mainPinIcon
  }
);

marker.addTo(map);

const sameIcon = L.icon({
  iconUrl : './leaflet/img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
})
declarationsArray.forEach(({location},index) => {
  const sameMarker = L.marker ({
      lat : location.x,
      lng : location.y
  },
  {
    icon : sameIcon
  })
  sameMarker
    .addTo(map)
    .bindPopup(blocks[index])
} )

export {inditifycationMap, marker}
