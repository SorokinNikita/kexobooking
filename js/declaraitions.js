import { declarationsArray } from "./data.js";
import { getRandomInt } from "./util.js";
const map = document.querySelector('.map');

const card = document.querySelector('#card')
  .content
  .querySelector('.popup');

const declarations = declarationsArray;
console.log(declarationsArray)

const fragment = document.createDocumentFragment();

declarations.forEach(({author, location, offer}) => {
  const cardElement = card.cloneNode(true);
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
  for (let i = 0; i < offer.features.length; i++) {
  const popupFeature = document.createElement('li');
  popupFeature.classList.add('popup__feature');
  popupFeature.classList.add('popup__feature--' + offer.features[i]);
  popupFeatures.appendChild(popupFeature);
  }
  cardElement.querySelector('.popup__description').textContent = offer.description;
  let picture =  cardElement.querySelector('.popup__photos img');
  let popupPhotos =  cardElement.querySelector('.popup__photos');
  for (let i = 0; i < offer.photos.length-1; i++) {
    popupPhotos.appendChild(picture.cloneNode());
  }
  let photo = popupPhotos.children;
  for (let i = 0; i < photo.length; i++) {
    photo[i].src = offer.photos[i];
  }
  cardElement.querySelector('.popup__avatar').src = author.avatar;
  fragment.appendChild(cardElement);
})

const blocks = fragment.children;

export {blocks}
