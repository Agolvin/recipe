
'use server'

import { Ingredient } from "@/utils/model";
import { Recipe } from "@/utils/model";
import { getBDD } from "@/utils/utils";
import { saveBDD } from "@/utils/utils";
import { Bdd } from "@/utils/model";



export async function getRecipesUser(p_idUser: number) {
    const bdd:Bdd = await getBDD();
    let usrRecipes:Recipe[] = bdd.recipes; 
    usrRecipes = usrRecipes.filter(ing => ing.idUser === p_idUser)
    return usrRecipes
}

export async function getAllRecipes() {
    const bdd:Bdd = await getBDD();
    return bdd.recipes;
}

export async function getRecipeByID(id: number): Promise<Recipe> {
    const bdd:Bdd = await getBDD();
    const recipe = bdd.recipes.find(r => r.id === id);
    if (!recipe) {
      throw new Error("Recette non trouvée");
    }
    return recipe;
}

export async function addRecipe(p_rec: Recipe) {
    const bdd:Bdd = await getBDD();
    const maxId = bdd.recipes.reduce(       
      (max, item) => Math.max(max, item.id), 0
    );
    p_rec.id = maxId + 1;
    console.log(p_rec);
    bdd.recipes.push(p_rec);       
    saveBDD(bdd);                              
    return p_rec;
}

export async function updateRecipe(p_rec: Recipe) {
  const bdd:Bdd = await getBDD();
  const ind = bdd.recipes.findIndex((elt) => elt.id === p_rec.id);
  bdd.recipes[ind] = p_rec;   
  saveBDD(bdd);                              
  return p_rec;
}

export async function saveRecipe(p_rec: Recipe) {
  if (p_rec.id > 0) {
    await updateRecipe(p_rec);
  } else {
    await addRecipe(p_rec);
  }
  return p_rec;
}








/*
export async function getIngredientsByIDold(input: { p_idIng: number }) {
  const ingredient:Ingredient|undefined = recipeData.ingredients.find(ing => ing.id === input.p_idIng)
  return ingredient
}
*/

/*
export async function getIngredientByID(id: number) {
  const ingredient = recipeData.ingredients.find(r => r.id === id);
  if (!ingredient) {
    return { error: "Ingrédient non trouvé", status: 404 }; // Retourne un objet d'erreur
  }
  return { data: ingredient, status: 200 }; // Toujours un objet structuré
}

*/




//export async function saveIngredient(formData: FormData) {

/*
  const ingredient = recipeData.ingredients.find(r => r.id === id);
  if (!ingredient) {
    return { error: "Ingrédient non trouvé", status: 404 }; // Retourne un objet d'erreur
  }
  return { data: ingredient, status: 200 }; // Toujours un objet structuré
*/

//}
