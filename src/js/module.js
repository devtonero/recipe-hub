export const mystate = {
  recipe: {},
};
//just checking
export const loadRecipe = async id => {
  try {
    const recipe = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    const ourRecipe = await recipe.json();
    if (!recipe.ok) throw new Error(`${data.message} (${recipe.status})`);

    const res = ourRecipe.data.recipe;

    state.recipe = {
      id: res.id,
      title: res.title,
      publisher: res.publisher,
      sourceUrl: res.source_url,
      image: res.image_url,
      servings: res.servings,
      cookingTime: res.cooking_time,
      ingredients: res.ingredients,
    };
    console.log(state.recipe);
  } catch (err) {
    alert(err);
  }
};
