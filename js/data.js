import { getRandomInt, getRandomNumber} from "./util.js";

const photos = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
];

const types = [
  'palace',
  'flat',
  'house',
  'bungalow'
];

const time = [
  '12:00',
  '13:00',
  '14:00'
];
const features = [
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
    featuresArray.push(features[i])
  }
  return featuresArray;
};

const getSomePhotos = () => {
  const photosArray = [];
  for (let i = 0; i < getRandomInt(1, 3); i++) {
    photosArray.push(photos[i])
  }
  return photosArray;
};

const getRandomType = () => {
  return types[getRandomInt(0, 3)]
};

const getRandomTime = () => {
  return time[getRandomInt(0, 2)]
};

let adGeneration = () => {
  for (let i = 1; i <= 10; i++) {
    declarationsArray.push ({
        author: {
          avatar : 'img/avatars/user0' + i + '.png'
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
