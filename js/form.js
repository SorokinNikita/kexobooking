const typeOfHouse = document.querySelector('#housing-type');
const minPrice = document.querySelector('#price');
const typeOfHouseItems = typeOfHouse.children;
const feature = document.querySelectorAll('.map__checkbox');

typeOfHouse.addEventListener('change', function () {
  if(typeOfHouse.value === 'any') {
    console.log('BOBER poshel na HUI')
  }
})
