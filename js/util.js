const Keys = {
  ESC: 'Esc',
  ESCAPE: 'Escape',
}

const checkEsc = (evt) => {
  return evt.key === Keys.ESC || evt.key === Keys.ESCAPE;
}



export {checkEsc}
