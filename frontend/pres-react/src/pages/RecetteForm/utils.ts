import { getRecipes } from "./api";

const ListeRecipe = getRecipes();

console.log("1");
ListeRecipe.then((data) => {
  console.log("2");
  console.log(data);
});

export { ListeRecipe };
