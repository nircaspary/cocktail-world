import axios from 'axios';
export default class Filters {
  constructor() {}
  getData = async () => {
    try {
      const resIng = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`);
      this.ingredients = objectToArray(resIng.data.drinks);

      const resGla = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list`);
      this.glass = objectToArray(resGla.data.drinks);

      const resCat = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`);
      this.categories = objectToArray(resCat.data.drinks);

      const resAlc = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list`);
      this.alcoholic = objectToArray(resAlc.data.drinks);
    } catch (err) {
      console.log(err);
    }
  };
}
const objectToArray = (objects) => {
  const arr = [];
  objects.forEach((obj) => {
    for (let e in obj) arr.push(obj[e]);
  });
  return arr;
};
