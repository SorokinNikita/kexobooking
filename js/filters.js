import { map } from "./map.js"
const filtersForm = document.querySelector('.map__filters')

const onChangeForm = (cb) => {
  filtersForm.addEventListener('change', cb)
}

filtersForm.addEventListener('change', () => {
  map.closePopup()
})

const getRank = (data) => {
  const housingType = document.querySelector('#housing-type')
  const housingPrice = document.querySelector('#housing-price')
  const housingRooms = document.querySelector('#housing-rooms')
  const housingGuests = document.querySelector('#housing-guests')
  let rank = 0
  if (housingType.value === data.offer.type || housingType.value === 'any') {
    rank += 2
  }
  if ((housingPrice.value === 'middle' && (data.offer.price > 10000 && data.offer.price < 50000))|| housingPrice.value === 'any') {
    rank += 2
  } else if ((housingPrice.value === 'low' && data.offer.price < 10000) || housingPrice.value === 'any') {
    rank += 2
  } else if ((housingPrice.value === 'high' && data.offer.price > 50000) || housingPrice.value === 'any') {
    rank += 2
  } if (housingRooms.value === data.offer.rooms || housingRooms.value === 'any') {
    rank += 2
  }
  if (housingGuests.value === data.offer.guests || housingGuests.value === 'any') {
    rank += 2

  }
  const features = document.querySelector('.map__features')
  const selectedFeatures = features.querySelectorAll(':checked')
  for (let i = 0; i < selectedFeatures.length; i++) {
    console.log(selectedFeatures.length)
  if (data.offer.features === selectedFeatures[i]) {
      rank+=2
  }
}
  return rank
}

const compareAd = (adA, adB) => {
  const rankA = getRank(adA);
  const rankB = getRank(adB);
  return rankB - rankA;
}

export {compareAd, onChangeForm, getRank}
