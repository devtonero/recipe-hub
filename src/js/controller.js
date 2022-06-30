import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { mystate, loadRecipe } from './module';
import RecipeV from './views/recipe';
// import RecipeV from './views/recipe';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const showRecipe = async () => {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    console.log(id);
    RecipeV.showSpinner();
    // loading API
    await loadRecipe(id);

    //RENDERING THE RECIPE
    RecipeV.render(mystate.recipe);
  } catch (err) {
    alert(err);
    console.log(err);
  }
};

['load', 'hashchange'].forEach(ev => window.addEventListener(ev, showRecipe));
