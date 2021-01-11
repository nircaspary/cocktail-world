import { elements } from "./base.js";

export const createCards = async (cocktails) => {
  if(elements.cocktailCards != null){

  elements.cocktailCards.innerHTML = "";
  await cocktails.forEach((cocktail) => {
    elements.cocktailCards.innerHTML += `<div class="card">
      <img class="card-img-top" src="${cocktail.strDrinkThumb}" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">${cocktail.strDrink}</h5>
        <a class="btn btn-primary ${cocktail.idDrink} btn-cocktail">Show Cocktail</a>
      </div>
    </div>`;
  });
  
}
};
