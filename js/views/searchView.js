import { elements } from './base.js';

export const getInput = () => elements.searchBar.value;

export const autoComplete = (results) => {
  clearContainer();
  if (elements.searchBar.value != '') {
    for (let i = 0; i < 10; i++) {
      if (results[i] !== undefined) elements.resultsContainer.innerHTML += `<div class="result">${results[i].strDrink}</div>`;
      else break;
    }
  } else clearContainer();
};

export const clearContainer = () => (elements.resultsContainer.innerHTML = '');
