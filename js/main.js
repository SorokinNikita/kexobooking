'use strict';

import "/js/send-ad.js";
import {markersRendering} from "/js/map.js";
import {createFetch} from "/js/fetch.js";
import { renderDeclarations } from "./declarations.js";
import "/js/util.js";
import "/js/validation.js";

const onSuccess = (data) => {
  let declarations =  renderDeclarations(data);
  markersRendering(data, declarations);
};

const onError = (err) => {
  alert('Ошибка загрузки данных ' + err.stack)
};

createFetch(onSuccess, onError, 'GET');
