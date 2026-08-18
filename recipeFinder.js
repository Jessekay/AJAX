async function getRecipe() {
  const recipe = await fetch('/api/recipe/42');
  const data = await recipe.json();
  console.log(data);
  return data;
}

async function getRecipeChained() {
  return fetch('/api/recipe/42')
  .then(r => r.json())
  .then(data => {
    console.log(data);
    return data;
  });
}