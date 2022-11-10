const Urls = {
  GET: 'https://23.javascript.pages.academy/keksobooking/data',
  POST: 'https://23.javascript.pages.academy/keksobooking',
}

const createFetch = (onSuccess, onError, method, data) => {
  fetch(
    Urls[method],
    {
      method: method,
      credentials: 'same-origin',
      body: data
    },
  )
    .then((response) => response.json())
    .then((response) => {
      onSuccess(response);
    })
    .catch((err) => {
      onError(err);
    });
};

export {createFetch}


