

import { Bdd, Recipe, isRecipe } from "../../../../shared/models/recipe.model";
import { getBDD, saveBDD } from "../../lib/utils";


export const getAllRecipesSv = async () => {
    console.log("getAllRecipesSv start");

    let bdd = getBDD();
    

    console.log("getAllRecipesSv getBDD ok");  
    if (!bdd.recipes) {
        throw new Error("Données recettes inexistantes en base");
    }
    
    console.log("getAllRecipesSv données base existantes",bdd.recipes);

    return bdd.recipes
}


export const getRecipeSv = async (idRecipe: number) => {
    console.log("getRecipeSv id=", idRecipe);
    let bdd = getBDD();
    if (!bdd.recipes) {
        throw new Error("Données recette inexistantes en base");
    }
    console.log("getRecipeSv base OK");

    // verif bloquante ??
    /*
    if (!bdd.recipes.every(isRecipe)) {
        throw new Error("Type de données recetttes incohérent entre la base et la description");
    }
    console.log("getRecipeSv type base OK");
    */

    let index = bdd.recipes.findIndex(
        (recette) => recette.id == idRecipe
    );
    console.log("getRecipeSv index: ",index);

    if (index == -1) {     
        throw new Error("Recette inexistante");
    }
    else {
        console.log("retour getRecipeSv:",bdd.recipes[index])
        return bdd.recipes[index]
    }
};



export const addRecipeSv = async (newRecipe : Recipe) => {

        console.log("addRecipeSv",newRecipe);

        let bdd = getBDD();
        if (!bdd.recipes) {
          throw new Error("Données recettes inexistantes en base");
        }
        if(!bdd.recipes.every(isRecipe)){
          throw new Error("Type de données recette incohérent entre la base et la description");
        }
        const maxId = bdd.recipes.reduce(      
          (max, item) => Math.max(max, item.id), 0
        );
        newRecipe.id = maxId + 1;
        bdd.recipes.push(newRecipe);       
        saveBDD(bdd);                               
        return newRecipe 

}



export const updateRecipeSv = async (upRecipe : Recipe) => {

    console.log("updateRecipeSv",upRecipe);

    let bdd = getBDD();
    if (!bdd.recipes) {
      throw new Error("Données recettes inexistantes en base");
    }
    if(!bdd.recipes.every(isRecipe)){
      throw new Error("Type de données recette incohérent entre la base et la description");
    }
    
    let index = bdd.recipes.findIndex(
        (recette) => recette.id == upRecipe.id
    );

    if (index == -1) {     //verifier doc val retour de findIndex
        throw new Error("Recette inexistante");
    }
    bdd.recipes[index] = upRecipe
    saveBDD(bdd);                               
    return upRecipe
}


