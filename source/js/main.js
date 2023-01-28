/* global _:readonly */
'use strict';

import "./map.js";
import {createFetch} from "./fetch.js";
import { renderDeclarations } from "./declarations.js";
import "./util.js";
import "./send-form-validation.js";
import "./filters.js"
import {onChangeForm } from "./filters.js";

const onSuccess = (data) => {
  renderDeclarations(data);
  onChangeForm(_.debounce(()=> renderDeclarations(data), 500,))
};

const onError = (err) => {
  alert('Ошибка загрузки данных ' + err.stack)
};

createFetch(onSuccess, onError, 'GET');
