import { elements } from './base.js';

export const createFilter = (element, results) => {
  if (element != null) {
    element.innerHTML = '';
    results.forEach((e) => {
      element.innerHTML += `<option value="${e}">${e}</option>`;
    });
  }
};
