import Cocktail from './models/Cocktail.js';
import Search from './models/Search.js';
import Filters from './models/Filters.js';
import User from './models/User.js';
import * as topCocktailsView from './views/topCocktailsView.js';
import * as SearchView from './views/searchView.js';
import * as filtersView from './views/filtersView.js';
import * as cocktailCardsView from './views/cocktailCardsView.js';
import * as cocktailView from './views/cocktailView.js';
import * as favoritesView from './views/favoritesView.js';
import { elements } from './views/base.js';

const user = new User('nirs', 'cass', 'nircss@gmail.com', 'i3rtbblfsmh');
user.createUser();

// ! START BY GETTING FILTERS
const createFilters = () => {
  filtersView.createFilter(elements.filterByIngredient, filters.ingredients);
  filtersView.createFilter(elements.filterByGlass, filters.glass);
  filtersView.createFilter(elements.filterByCategory, filters.categories);
  filtersView.createFilter(elements.filterByAlcoholic, filters.alcoholic);
};

const filters = new Filters();
filters.getData().then(() => createFilters());

// !Global state of the app
const state = {
  // Search object
  // top Cocktail
  // Cocktail object
  // Liked cocktails
};

// !TOP COCKTAILS CONTROLLER
const topCocktailsId = [new Cocktail(11001), new Cocktail(11003), new Cocktail(11006), new Cocktail(11005)];

const controlTopCocktails = async () => {
  //Create new cocktail object
  state.topCocktails = [];
  //Get cocktail data
  // for (const i of topCocktailsId) {
  const cocktail = await topCocktailsId[1].getCocktail();
  // }
  //Render Top Cocktail
};

controlTopCocktails();

// ! SEARCH CONTROLLER

// Auto complete event
elements.searchBar.addEventListener('input', async () => {
  let query = `search.php?s=${SearchView.getInput()}`;
  state.search = new Search(query);
  await state.search.getResults();
  SearchView.autoComplete(state.search.result);
});

// On enter click search event
elements.searchBar.addEventListener('keyup', e => {
  if (e.keyCode === 13) {
    let query = `search.php?s=${SearchView.getInput()}`;
    window.location.href = `cocktails.html#${query}`;
  }
});

// Auto complete results click event
elements.resultsContainer.addEventListener('click', e => {
  let query = `search.php?s=${e.target.innerText}`;
  //redirect to search results page with the searched name
  window.location.href = `cocktails.html#${query}`;
});
//Clear Auto Complete container on body click
elements.body.addEventListener('click', e => {
  SearchView.clearContainer();
  console.log(e.target.className);
  if (e.target.className !== 'nav-icon md hydrated') favoritesView.clearContainer();
});

// !FILTERING CONTROLLER
elements.filtersSelect.forEach(e => {
  e.addEventListener('change', () => {
    const queryType = e.className.split('-')[1].charAt(0);
    const query = `filter.php?${queryType}=${e.value}`;
    window.location.href = `cocktails.html#${query}`;
  });
});

// ! COCKTAIL CARDS CONTROLLER
//When redirect send request with hash
$(window).on('load hashchange', async () => {
  //1. Check if there is hash
  if (window.location.hash != '' && window.location.hash != '#about') {
    //Build query from hash
    let query = window.location.hash.slice('1');
    //Create search object and get all data from server
    state.search = new Search(query);
    await state.search.getResults();

    //Creates the DOM of the results page
    cocktailCardsView.createCards(state.search.result);
    //Redirect to cocktail page if Cocktail card clicked
    directToCocktailCard();
    state.cocktail = new Cocktail(state.search.result[0].idDrink);
    await state.cocktail.getCocktail();
    localStorage.setItem('cocktail', JSON.stringify(state.cocktail));
    cocktailView.crateCocktail(state.cocktail);
  }
});

// !COCKTAIL PAGE CONTROLLER

const directToCocktailCard = () => {
  let favoritesBtn = document.querySelectorAll('.btn-cocktail');
  favoritesBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      const query = `lookup.php?i=${btn.className.match(/\d/g).join('')}`;
      window.location.href = `cocktail.html#${query}`;
    });
  });
};

// !FAVORITES CONTROLLER
if (window.location.href.includes('cocktail.html')) {
  elements.favotritesBtn.addEventListener('click', () => {
    if (!localStorage.favorites) {
      localStorage.setItem('favorites', JSON.stringify([]));
    }

    const currentCocktail = JSON.parse(localStorage.getItem('cocktail'));
    state.favorites = JSON.parse(localStorage.getItem('favorites'));
    addOrRemoveFavorite(state.favorites, currentCocktail);
    localStorage.setItem('favorites', JSON.stringify(state.favorites));
  });
}

const addOrRemoveFavorite = (favorites, currentCocktail) => {
  if (favorites.length === 0) favorites.push(currentCocktail);
  else {
    for (let e of favorites) {
      if (e.id == currentCocktail.id) {
        const index = favorites.findIndex(el => el.id === currentCocktail.id);
        favorites.splice(index, 1);
        return;
      }
    }
    state.favorites.push(currentCocktail);
  }
};

elements.favoritesIcon.addEventListener('click', () => {
  favoritesView.favoritesList(JSON.parse(localStorage.getItem('favorites')));
});
