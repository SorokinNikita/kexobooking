const adForm = document.querySelector('.ad-form');
const adFormItems = adForm.children
const mapFilters = document.querySelector('.map__filters');
const mapFiltersItems = mapFilters.children

for (let i = 0; i < mapFiltersItems.length; i++) {
  mapFiltersItems[i].setAttribute('disabled', 'disabled')
}
mapFilters.classList.add('ad-form--disabled');


for (let i = 0; i < adFormItems.length; i++) {
  adFormItems[i].setAttribute('disabled', 'disabled')
}
adForm.classList.add('ad-form--disabled');

const activatePage = () => {
    adForm.classList.remove('ad-form--disabled');
    for (let i = 0; i < adFormItems.length; i++) {
      adFormItems[i].removeAttribute('disabled', 'disabled')
    }
    for (let i = 0; i < mapFiltersItems.length; i++) {
      mapFiltersItems[i].removeAttribute('disabled', 'disabled')
  }
      mapFilters.classList.remove('ad-form--disabled');
  }
export {activatePage}
