// import { async } from 'regenerator-runtime';

// export const mystate = {
//   recipe: {},
// };
// //just checking
// export const loadRecipe = async id => {
//   try {
//     const recipe = await fetch(
//       `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
//     );
//     const ourRecipe = await recipe.json();
//     if (!recipe.ok) throw new Error(`${data.message} (${recipe.status})`);

//     const res = ourRecipe.data.recipe;

//     mystate.recipe = {
//       id: res.id,
//       title: res.title,
//       publisher: res.publisher,
//       sourceUrl: res.source_url,
//       image: res.image_url,
//       servings: res.servings,
//       cookingTime: res.cooking_time,
//       ingredients: res.ingredients,
//     };
//     console.log(mystate.recipe);
//   } catch (err) {
//     alert(err);
//   }
// };
