import { declarationsArray } from "./data.js";

const map = document.querySelector('.map');

const card = document.querySelector('#card')
  .content
  .querySelector('.popup');

const declarations = declarationsArray;
console.log(declarationsArray)

const fragment = document.createDocumentFragment();

declarations.forEach(({author, location, offer}) => {
  const cardElement = card.cloneNode(true);
  console.log(offer.title);
  cardElement.querySelector('.popup__title').textContent = offer.title;
  cardElement.querySelector('.popup__text--address').textContent = offer.address;
  cardElement.querySelector('.popup__text--price').textContent = offer.price + ' ₽/ночь';
  switch (offer.type) {
    case 'bungalow': cardElement.querySelector('.popup__type').textContent = 'Бунгало';
    break
    case 'flat': cardElement.querySelector('.popup__type').textContent = 'Квартира';
    break
    case 'house': cardElement.querySelector('.popup__type').textContent = 'Дом';
    break
    case 'palace': cardElement.querySelector('.popup__type').textContent = 'Дворец';
  }
  const guestsAmount = offer.guests;
  const roomsAmount = offer.rooms;
  let guestsString = ' гостя';
  let roomsString = ' комната';
  if (guestsAmount > 1) {
    guestsString = ' гостей'
  }
  if (roomsAmount > 1 ) {
    roomsString = ' комнаты'
  }
  if (roomsAmount > 4 ) {
    roomsString = ' комнат'
  }
  cardElement.querySelector('.popup__text--capacity').textContent = roomsAmount + roomsString + ' для ' + guestsAmount + guestsString;
  cardElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + offer.checkin + ', выезд до ' + offer.checkout;
  const popupFeatures = cardElement.querySelector('.popup__features');
  for (let i = popupFeatures.children.length - 1; i >= 0; i--) {
  const child = popupFeatures.children[i];
  child.parentElement.removeChild(child);
}
  const featuresItem = offer.features;
  for (let i = 0; i < featuresItem.length; i++) {
  const popupFeature = document.createElement('li');
  popupFeature.classList.add('popup__feature');
  popupFeature.classList.add('popup__feature--' + featuresItem[i]);
  popupFeatures.appendChild(popupFeature);
  }
  cardElement.querySelector('.popup__description').textContent = offer.description;
  cardElement.querySelector('.popup__photos img').src = offer.photos[2];
  cardElement.querySelector('.popup__avatar').src = author.avatar;
  fragment.appendChild(cardElement);
})
const blocks = fragment.children;
const parent = document.querySelector('#map-canvas');
parent.appendChild(blocks[1])
