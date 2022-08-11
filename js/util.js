const getRandomInt = (max, min) => {
  if (max < 0 || min < 0) {
    return -1;
  }
  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max-min + 1) + min);
};

const getRandomNumber = (max, min, n) => {
  if (max < 0 || min < 0) {
    return -1;
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  let RandomNumber = (Math.random() * (max-min + 1)) + min;
  return +RandomNumber.toFixed(n);
};

export {getRandomInt, getRandomNumber};
