const typeOfHouse = document.querySelector('#type');
const minPrice = document.querySelector('#price');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const capacity = document.querySelector('#capacity');
const roomNumber = document.querySelector('#room_number');
const avatarInput = document.querySelector('.ad-form-header__input');
const avatarPreviewContainer = document.querySelector('.ad-form-header__preview');
const avatarPreview = avatarPreviewContainer.querySelector('img');
const photoInput = document.querySelector('.ad-form__input');
const photoPreviewContainer = document.querySelector('.ad-form__photo');
const IMAGE_TYPES = ['jpg', 'png']

avatarInput.addEventListener('change', () => {
  const fileAvatar = avatarInput.files[0];
  const fileAvatarName = fileAvatar.name.toLowerCase();
  const accepted = IMAGE_TYPES.some((it) => {
    return fileAvatarName.endsWith(it);
  })
  if(accepted) {
    const reader = new FileReader();
    reader.addEventListener('load', ()=>{
      avatarPreview.src = reader.result;
    });

    reader.readAsDataURL(fileAvatar)
  }
})

photoInput.addEventListener('change', () => {
  const fileAvatar = photoInput.files[0];
  const fileAvatarName = fileAvatar.name.toLowerCase();
  const accepted = IMAGE_TYPES.some((it) => {
    return fileAvatarName.endsWith(it);
  })
  if(accepted) {
    const reader = new FileReader();
    const photoPreview = document.createElement('img')
    photoPreview.width = 70
    photoPreview.height = 70
    photoPreviewContainer.appendChild(photoPreview)
    reader.addEventListener('load', ()=>{
      photoPreview.src = reader.result;
    });

    reader.readAsDataURL(fileAvatar)
  }
})


typeOfHouse.addEventListener('change',  () => {
  switch(typeOfHouse.value) {
    case 'palace' : minPrice.min = 10000, minPrice.placeholder = 10000;
    break
    case 'flat' : minPrice.min = 1000; minPrice.placeholder = 1000
    break
    case 'house' : minPrice.min = 5000; minPrice.placeholder = 5000
    break
    case 'bungalow' : minPrice.min = 0; minPrice.placeholder = 0
  }
})

timeIn.addEventListener('change', function () {
  switch(timeIn.value) {
    case '12:00' : timeOut.value = '12:00'
    break
    case '13:00' : timeOut.value = '13:00'
    break
    case '14:00' : timeOut.value = '14:00'
    break
  }
})

timeOut.addEventListener('change', ()=> {
  switch(timeOut.value) {
    case '12:00' : timeIn.value = '12:00'
    break
    case '13:00' : timeIn.value = '13:00'
    break
    case '14:00' : timeIn.value = '14:00'
    break
  }
})

roomNumber.addEventListener('change', ()=> {
  capacity.setCustomValidity('')
    if ((roomNumber.value === '1' && capacity.value > '1') || (roomNumber.value === '1' && capacity.value === '0')) {
    roomNumber.setCustomValidity('в одну комнату один гость')
  } else if (roomNumber.value === '2' && capacity.value > '2') {
    roomNumber.setCustomValidity('Маловато комнат')
  } else if (roomNumber.value === '2' && capacity.value === '0') {
    roomNumber.setCustomValidity('Многовато гостей для двух комнат')
  } else if (roomNumber.value === '3' && capacity.value ==='0') {
    roomNumber.setCustomValidity('Нужно больше комнат');
  } else if (roomNumber.value === '100' && capacity.value > 0) {
    roomNumber.setCustomValidity('Слишком много комнат')
  } else {
    roomNumber.setCustomValidity('')
  }
  roomNumber.reportValidity()
})

capacity.addEventListener('change', ()=> {
  roomNumber.setCustomValidity('')
    if ((roomNumber.value === '1' && capacity.value > '1') || (roomNumber.value === '1' && capacity.value === '0')) {
    capacity.setCustomValidity('в одну комнату один гость')
  } else if (roomNumber.value === '2' && capacity.value > '2') {
    capacity.setCustomValidity('Многовато гостей для двух комнат')
  } else if (roomNumber.value === '2' && capacity.value === '0') {
    capacity.setCustomValidity('Многовато гостей для двух комнат')
  } else if (roomNumber.value === '3' && capacity.value ==='0') {
    capacity.setCustomValidity('Нужно больше комнат')
  } else if (roomNumber.value === '100' && capacity.value > 0) {
    capacity.setCustomValidity('Слишком много комнат')
    roomNumber.setCustomValidity('')
  } else {
    capacity.setCustomValidity('')
  }
  capacity.reportValidity()
})
