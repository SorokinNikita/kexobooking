import { map } from "./map.js"
const filtersForm = document.querySelector('.map__filters')

const onChangeForm = (cb) => {
  filtersForm.addEventListener('change', cb)
}

filtersForm.addEventListener('change', () => {
  map.closePopup()
})

const adsFiltration = (data) => {
  const housingType = document.querySelector('#housing-type');
  const housingPrice = document.querySelector('#housing-price');
  const housingRooms = document.querySelector('#housing-rooms');
  const housingGuests = document.querySelector('#housing-guests');
  const features = document.querySelector('#housing-features')
  const choisenFeatures = features.querySelectorAll(':checked');
  let isFeatures = Boolean
  if (choisenFeatures.length > 0 && data.offer.features && choisenFeatures.length === data.offer.features.length) {
    for (let i = 0; i < choisenFeatures.length; i++) {
      isFeatures = data.offer.features.includes(choisenFeatures[i].value)
      console.log(isFeatures)
    }
  }
  if (choisenFeatures.length > 0 && !data.offer.features) {
    isFeatures = false
  }
  if (choisenFeatures.length > 0 && data.offer.features && choisenFeatures.length !== data.offer.features.length) {
    isFeatures = false
  }
  return (housingType.value === data.offer.type || housingType.value === 'any') &&
  ((housingPrice.value === 'middle' && (data.offer.price > 10000 && data.offer.price < 50000) || housingPrice.value === 'any') ||
  ((housingPrice.value === 'low' && data.offer.price < 10000) || housingPrice.value === 'any') ||
  ((housingPrice.value === 'high' && data.offer.price > 50000) || housingPrice.value === 'any')) &&
  ((Number(housingRooms.value) === data.offer.rooms || housingRooms.value === 'any')) &&
  ((Number(housingGuests.value) === data.offer.guests || housingGuests.value === 'any')) && isFeatures
}


const compareAd = (adA, adB) => {
  const rankA = getRank(adA);
  const rankB = getRank(adB);
  return rankB - rankA;
}



export {compareAd, onChangeForm, adsFiltration}
