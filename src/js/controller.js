import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { mystate, loadRecipe } from './module';
import recipeV from './views/recipe';

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

const sRecipe = async () => {
  try {
    const id = window.location.hash;
    if (!id) return;

    recipeV.showSpinner();
    //loading recipe API
    await loadRecipe(id);
    await mystate(id);

    //Rendering the Recipe
    recipeV.render(mystate.recipe);
  } catch (error) {
    alert(error);
  }
};

// window.addEventListener('hashchange', sRecipe);
// window.addEventListener('load', sRecipe);
['load', 'hashchange'].forEach(ev => window.addEventListener(ev, sRecipe));
