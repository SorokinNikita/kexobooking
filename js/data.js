import { getRandomInt, getRandomNumber} from "./util.js";

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow'
];

const TIME = [
  '12:00',
  '13:00',
  '14:00'
];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];
const declarationsArray = [];

const getSomeFeatures = () => {
  const featuresArray = [];
  for (let i = 0; i < getRandomInt(1, 6); i++) {
    featuresArray.push(FEATURES[i])
  }
  return featuresArray;
};

const getSomePhotos = () => {
  const photosArray = [];
  for (let i = 0; i < getRandomInt(1, 3); i++) {
    photosArray.push(PHOTOS[i])
  }
  return photosArray;
};

const getRandomType = () => {
  return TYPES[getRandomInt(0, 3)]
};

const getRandomTime = () => {
  return TIME[getRandomInt(0, 2)]
};

let adGeneration = () => {
  for (let i = 1; i <= 10; i++) {
  let link = 'img/avatars/user0';
  if (i === 10) {
    link = 'img/avatars/user';
    }
    declarationsArray.push ({
        author: {
          avatar : link + i + '.png'
        },

        offer: {
          title: 'Объявление №' + i,
          address: String(getRandomNumber(35.65000, 35.70000, 5)) + ', ' + String(getRandomNumber(35.65000, 35.70000, 5)),
          price: getRandomNumber(5000, 15000),
          type: getRandomType(),
          rooms: getRandomNumber(1, 8),
          guests: getRandomNumber(1, 15),
          checkin: getRandomTime(),
          checkout: getRandomTime(),
          features: getSomeFeatures(),
          description: 'Big',
          photos: getSomePhotos(),
        },

        location: {
          x: getRandomNumber(35.65000, 35.70000, 5),
          y: getRandomNumber(35.65000, 35.70000, 5)
        }
    })
  }
};

adGeneration();

export {declarationsArray};
