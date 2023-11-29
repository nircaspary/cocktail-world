import axios from 'axios';
class Cocktail {
  constructor(id) {
    this.id = id;
  }
  getCocktail = async () => {
    try {
      //Get Data Request
      const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.id}`);

      //Data Destructuring
      const { idDrink, strDrink, strCategory, strAlcoholic, strGlass, strInstructions, strDrinkThumb } = res.data.drinks[0];

      //Object Define
      this.id = idDrink;
      this.name = strDrink;
      this.category = strCategory;
      this.alcoholic = strAlcoholic;
      this.glass = strGlass;
      this.instructions = strInstructions;
      this.image = strDrinkThumb;
      this.ingredients = createIngredientsFromResponse(res.data.drinks[0]);
    } catch (err) {
      alert(err);
    }
  };
}
export default Cocktail;

const createIngredientsFromResponse = (res) => {
  const ingredients = [];
  const measures = [];
  const combined = [];
  for (let e in res) {
    if (res[e] && e.includes('strIngredient')) ingredients.push(res[e]);
    if (res[e] && e.includes('strMeasure')) measures.push(res[e]);
  }
  for (let i = 0; i < ingredients.length; i++) {
    !measures[i] ? combined.push(`${ingredients[i]}`) : combined.push(`${measures[i]} ${ingredients[i]}  `);
  }
  return combined;
};
