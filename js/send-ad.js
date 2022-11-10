import { createFetch } from "./fetch.js";
import {success, error, body, removeAllert, onEscapeDown} from "./alerts.js";
import {setStartAddress} from "./map.js"
const adForm = document.querySelector('.ad-form')
const resetButton = document.querySelector('.ad-form__reset')
const filterForm = document.querySelector('.map__filters')

const onSuccess = () => {
  adForm.reset()
  setStartAddress()
  body.appendChild(success)
  document.addEventListener('click', removeAllert)
  document.addEventListener('keydown', onEscapeDown)
}


const onError = () => {
  body.appendChild(error)
  const errorButton = error.querySelector('.error__button')
  document.addEventListener('click', removeAllert)
  document.addEventListener('keydown', onEscapeDown)
  errorButton.addEventListener('click', removeAllert)
}

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  createFetch(onSuccess, onError, 'POST', new FormData(evt.target));
})

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault()
  filterForm.reset()
  adForm.reset()
  setStartAddress()
})
