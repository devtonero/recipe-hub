import 'core-js/stable';
import 'regenerator-runtime/runtime';

import icon from '../img/icons.svg';
import { Fraction } from 'fractional';

// import * as model from './module';
// import recipeV from './views/recipe';

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

const spinner = parentEl => {
  const html = `
    <div class="spinner">
              <svg>
                <use href="${icon}#icon-loader"></use>
              </svg>
            </div>
    `;
  parentEl.innerHtml = '';
  parentEl.insertAdjacentHTML('afterbegin', html);
};

const showRecipe = async () => {
  try {
    spinner(recipeContainer);
    // loading API
    const recipe = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886`
      //`https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bcc7e`
    );
    const ourRecipe = await recipe.json();
    if (!recipe.ok) throw new Error(`${ourRecipe.message} (${recipe.status})`);
    console.log(recipe);
    console.log(ourRecipe);

    let res = ourRecipe.data.recipe;

    res = {
      id: res.id,
      title: res.title,
      publisher: res.publisher,
      sourceUrl: res.source_url,
      image: res.image_url,
      servings: res.servings,
      cookingTime: res.cooking_time,
      ingredients: res.ingredients,
    };
    console.log(res);

    //RENDERING THE RECIPE
    const html = `
    <figure class="recipe__fig">
         <img src="${res.image}" alt="${res.title}" class="recipe__img" />
              <h1 class="recipe__title">
                <span>${res.title}</span>
              </h1>
            </figure>
    
            <div class="recipe__details">
              <div class="recipe__info">
                <svg class="recipe__info-icon">
                  <use href="${icon}#icon-clock"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--minutes">${
                  res.cookingTime
                }</span>
                <span class="recipe__info-text">minutes</span>
              </div>
              <div class="recipe__info">
                <svg class="recipe__info-icon">
                  <use href="${icon}#icon-users"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--people">${
                  res.servings
                }</span>
                <span class="recipe__info-text">servings</span>
    
                <div class="recipe__info-buttons">
                  <button class="btn--tiny btn--increase-servings">
                    <svg>
                      <use href="${icon}#icon-minus-circle"></use>
                    </svg>
                  </button>
                  <button class="btn--tiny btn--increase-servings">
                    <svg>
                      <use href="${icon}#icon-plus-circle"></use>
                    </svg>
                  </button>
                </div>
              </div>
    
              <div class="recipe__user-generated">
                <svg>
                  <use href="${icon}#icon-user"></use>
                </svg>
              </div>
              <button class="btn--round">
                <svg class="">
                  <use href="${icon}#icon-bookmark-fill"></use>
                </svg>
              </button>
            </div>
    
            <div class="recipe__ingredients">
              <h2 class="heading--2">Recipe ingredients</h2>
              <ul class="recipe__ingredient-list">
              ${res.ingredients
                .map(ing => {
                  return `
              <li class="recipe__ingredient">
       <svg class="recipe__icon">
         <use href="${icon}#icon-check"></use>
       </svg>
       <div class="recipe__quantity">${
         ing.quantity ? new Fraction(ing.quantity).toString() : ''
       }</div>
       <div class="recipe__description">
         <span class="recipe__unit">${ing.unit}</span>
        ${ing.description}
       </div>
 </li>
              `;
                })
                .join('')}
              </ul>
            </div>
    
            <div class="recipe__directions">
              <h2 class="heading--2">How to cook it</h2>
              <p class="recipe__directions-text">
                This recipe was carefully designed and tested by
                <span class="recipe__publisher">${
                  res.publisher
                }</span>. Please check out
                directions at their website.
              </p>
              <a
                class="btn--small recipe__btn"
                href="${res.sourceUrl}"
                target="_blank"
              >
                <span>Directions</span>
                <svg class="search__icon">
                  <use href="${icon}#icon-arrow-right"></use>
                </svg>
              </a>
            </div>
        `;
    recipeContainer.innerHTML = '';
    recipeContainer.insertAdjacentHTML('afterbegin', html);
  } catch (err) {
    alert(err);
    console.log(err);
  }
};

['load', 'hashchange'].forEach(ev => window.addEventListener(ev, sRecipe));

// const sRecipe = async () => {
//   try {
//     const id = window.location.hash.slice(1);
//     if (!id) return;

//     recipeV.showSpinner();
//     //loading recipe API
//     await model.loadRecipe(id);

//     //Rendering the Recipe
//     recipeV.render(model.mystate.recipe);
//   } catch (error) {
//     alert(error);
//   }
// };

// // window.addEventListener('hashchange', sRecipe);
// // window.addEventListener('load', sRecipe);
// ['load', 'hashchange'].forEach(ev => window.addEventListener(ev, sRecipe));
