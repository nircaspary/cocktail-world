import axios from 'axios';
export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    try {
      const res = await axios(`https://www.thecocktaildb.com/api/json/v1/1/${this.query}`);
      this.result = res.data.drinks;
    } catch (error) {
      alert(error);
    }
  }
}
