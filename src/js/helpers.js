import { TIMEOUT_SEC } from './config';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJson = async url => {
  try {
    const recipe = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
    const ourRecipe = await recipe.json();
    if (!recipe.ok) throw new Error(`${ourRecipe.message} (${recipe.status})`);
    return ourRecipe;
  } catch (err) {
    throw err;
  }
};
