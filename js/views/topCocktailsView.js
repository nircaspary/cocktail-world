const $name = document.querySelector(".top-cocktails-name");
const $ingredients = document.querySelector(".ing-con");
const $instructions = document.querySelector(".instruction");
const $glass = document.querySelector(".glass");
const $category = document.querySelector(".category");
const $alcoholic = document.querySelector(".alcoholic");
const $image = document.querySelector(".top-cocktails-image");
const $mobileImage = document.querySelector(".top-cocktails-container");

export const createTopCocktailCard = (cocktail) => {
  //Object Destructuring
  const {
    image,
    name,
    ingredients,
    instructions,
    glass,
    category,
    alcoholic,
  } = cocktail;

  //DOM Manipulation
  let gradient =
    "linear-gradient(to right bottom,#00000096, #74081a60, #00000096)";
  if (document.body.clientWidth < 1200) {
    $mobileImage.style.background = ` ${gradient}
       no-repeat,
       url(${image}
        ) center center / cover no-repeat`;
  } else {
    $mobileImage.style.background = `#e7042a60`;
  }

  $image.src = image;
  $name.innerHTML = name;
  $ingredients.innerHTML = "";
  createIngredients(ingredients);
  $instructions.innerHTML = instructions;
  $glass.innerHTML = glass;
  $category.innerHTML = category;
  $alcoholic.innerHTML = alcoholic;
};

const createIngredients = (ingredients) => {
  ingredients.forEach((ingredient) => {
    $ingredients.innerHTML += `<p class="ingredient">${ingredient}</p>`;
  });
};
