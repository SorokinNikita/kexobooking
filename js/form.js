import { marker } from "./map.js";

const typeOfHouse = document.querySelector('#type');
const minPrice = document.querySelector('#price');
const feature = document.querySelectorAll('.map__checkbox');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const address = document.querySelector('#address');

typeOfHouse.addEventListener('change', function () {
  switch(typeOfHouse.value) {
    case 'palace' : minPrice.min = 10000, minPrice.placeholder = 10000;
    break
    case 'flat' : minPrice.min = 1000; minPrice.placeholder = 1000
    break
    case 'house' : minPrice.min = 5000; minPrice.placeholder = 5000
    break
    case 'bungalow' : minPrice.min = 0; minPrice.placeholder = 0
  }
})

timeIn.addEventListener('change', function () {
  switch(timeIn.value) {
    case '12:00' : timeOut.value = '12:00'
    break
    case '13:00' : timeOut.value = '13:00'
    break
    case '14:00' : timeOut.value = '14:00'
    break
  }
})

timeOut.addEventListener('change', function () {
  switch(timeOut.value) {
    case '12:00' : timeIn.value = '12:00'
    break
    case '13:00' : timeIn.value = '13:00'
    break
    case '14:00' : timeIn.value = '14:00'
    break
  }
})

address.value = Object.values(marker._latlng)

marker.on('moveend', (evt) => {
  let cords = Object.values(evt.target.getLatLng());
  address.value = cords[0].toFixed(6) + ', ' + cords[1].toFixed(6);
})
