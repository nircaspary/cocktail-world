const cocktailName = document.querySelector('.cocktail-view-header');
const cocktailGlass = document.querySelector('.cocktail-glass');
const cocktailCategory = document.querySelector('.cocktail-category');
const cocktailAlcoholic = document.querySelector('.cocktail-alcoholic');
const cocktailInstructions = document.querySelector('.cocktail-instruction');
const cocktailIngredients = document.querySelector('.cocktail-ing-con');
const cocktailImg = document.querySelector('.cocktail-view-head');
const favotritesBtn = document.querySelector('.cocktail-view-favorites-btn');

export const crateCocktail = (cocktail) => {
  //Object Destructuring
  const { id, image, name, ingredients, instructions, glass, category, alcoholic } = cocktail;

  const gradient = 'linear-gradient(rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0))';
  cocktailImg.style.background = `
  ${gradient} no-repeat,
    url(${image}) center / cover no-repeat`;
  cocktailName.innerText = name;
  cocktailGlass.innerText = glass;
  cocktailCategory.innerText = category;
  cocktailAlcoholic.innerText = alcoholic;
  createIngredients(ingredients);
  cocktailInstructions.innerText = instructions;

  favotritesBtn.classList.add(id);
};
const createIngredients = (ingredients) => {
  ingredients.forEach((ingredient) => {
    cocktailIngredients.innerHTML += `<p class="ingredient">${ingredient}</p>`;
  });
};
