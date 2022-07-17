import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { mystate, loadRecipe, searchRecipe, getResultPage } from './module';

import RecipeV from './views/recipe';
import SearchV from './views/search';
import ResultV from './views/result';
import PaginationV from './views/pagination';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
if (module.hot) {
  module.hot.accept();
}

const showRecipe = async () => {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    RecipeV.showSpinner();
    // loading API
    await loadRecipe(id);

    //RENDERING THE RECIPE
    RecipeV.render(mystate.recipe);
  } catch (err) {
    console.log(err);
    RecipeV.renderError();
  }
};

const controlSearch = async () => {
  try {
    ResultV.showSpinner();
    //geting input query
    const query = SearchV.getQuery();
    if (!query) return ResultV.renderError();
    //searching for the input query results
    await searchRecipe(query);

    //rendering the markup
    // ResultV.render(mystate.search.results);
    ResultV.render(getResultPage(2));

    //render pagination
    PaginationV.render(mystate.search);
  } catch (error) {
    console.log(error);
  }
};
const init = () => {
  RecipeV.handleEvent(showRecipe);
  SearchV.handleSearch(controlSearch);
};
init();
//['load', 'hashchange'].forEach(ev => window.addEventListener(ev, showRecipe));
