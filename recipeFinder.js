async function getRecipe() {
  const recipe = await fetch('/api/recipe/42')
  const data = await recipe.json()
  console.log(data);
  return data;
  
}