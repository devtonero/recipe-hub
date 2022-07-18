import { API_URL, RESULT_PER_PAGE } from './config';
import { getJson } from './helpers';

export const mystate = {
  recipe: {},
  search: {
    query: '',
    results: [],
    resPerPage: RESULT_PER_PAGE,
    page: 1,
  },
};

export const loadRecipe = async id => {
  try {
    const ourRecipe = await getJson(`${API_URL}${id}`);

    console.log(`${API_URL}${id}`);
    console.log(ourRecipe);

    const res = ourRecipe.data.recipe;

    mystate.recipe = {
      id: res.id,
      title: res.title,
      publisher: res.publisher,
      sourceUrl: res.source_url,
      image: res.image_url,
      servings: res.servings,
      cookingTime: res.cooking_time,
      ingredients: res.ingredients,
    };
  } catch (err) {
    throw err;
  }
};

export const searchRecipe = async recipe => {
  try {
    mystate.search.query = recipe;
    const recipeData = await getJson(`${API_URL}?search=${recipe}`);
    console.log(recipeData);

    mystate.search.results = recipeData.data.recipes.map(res => {
      return {
        id: res.id,
        title: res.title,
        publisher: res.publisher,
        image: res.image_url,
      };
    });
  } catch (err) {
    console.log(`${err} fire for fire`);
    throw err;
  }
};

export const getResultPage = (page = mystate.search.page) => {
  mystate.search.page = page;
  const start = (page - 1) * mystate.search.resPerPage;
  const stop = page * mystate.search.resPerPage;
  return mystate.search.results.slice(start, stop);
};

export const updateServings = ()=>{

}