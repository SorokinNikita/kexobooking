import { checkEsc } from "./util.js"
const body = document.querySelector('body')
const success = document.querySelector('#success')
  .content
  .querySelector('.success')
const error = document.querySelector('#error')
  .content
  .querySelector('.error')

const removeAllert = () => {
  body.removeChild(body.lastChild)
  document.removeEventListener('click', removeAllert)
  document.removeEventListener('keydown', onEscapeDown)
}

const onEscapeDown = (evt) => {
  if (checkEsc(evt)) {
    removeAllert()
  }
}


export {success, error, body, removeAllert, onEscapeDown}
