'use strict';

import "/js/send-ad.js";
import {map} from "/js/map.js";
import {createFetch} from "/js/fetch.js";
import { renderDeclarations } from "./declarations.js";
import "/js/util.js";
import "/js/send-form.js";
import "/js/filters.js"
import {onChangeForm } from "./filters.js";

const onSuccess = (data) => {
  console.log(data)
  renderDeclarations(data);
  onChangeForm(()=> renderDeclarations(data))
};

const onError = (err) => {
  alert('Ошибка загрузки данных ' + err.stack)
};

createFetch(onSuccess, onError, 'GET');
