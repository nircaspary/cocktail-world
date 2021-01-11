import elements from "./base.js";

export const favoritesList = (favoritesList) => {
  clearContainer();
  if (favoritesList.length > 0) {
    for (let i = 0; i < favoritesList.length; i++) {
      console.log(favoritesList);
      elements.favoritesContainer.innerHTML += `
      <div class="favorite-item">
      <img  src="${favoritesList[i].image}"/>
      <div>${favoritesList[i].name}</div>
      <div> X </div>
      </div>`;
    }
  }
};
export const clearContainer = () => {
  elements.favoritesContainer.innerHTML = "";
};
