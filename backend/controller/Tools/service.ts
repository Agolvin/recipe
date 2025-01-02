

import { Ingredient,Ingredient2, IngredientQte, Recipe2, UnitEnum } from "../../shared/back.model";
import { getBDD, saveBDD } from "../../lib/utils";




export const testToolsSv = async () => {
    console.log("testToolsSv");
};


export const migrationToolsSv = async () => {

  console.log("migrationToolsSv");

  let bdd = getBDD();

  //suppression de toutes les données tmp qui restent éventuellement des anciennes migrations
  bdd.ingredientstmp.length = 0; 
  bdd.recipestmp.length = 0; 


  
  bdd.ingredients.forEach((ing_old) => {
    const ing_new:Ingredient2 = {
      id: ing_old.id,
      idUser: 1,
      unit: UnitEnum.GRAM,           
      name: ing_old.name,
      description: ing_old.description, 
      price: ing_old.price,       
    };
    bdd.ingredientstmp.push(ing_new);
    console.log(ing_old);
    console.log(ing_new);
  });




  bdd.recipes.forEach((rec_old) => {
    const rec_new:Recipe2 = {
      id: rec_old.id,
      idUser: 1,
      test: false,
      ingredient: false,
      commentaire: '',
      name: rec_old.name,
      description: rec_old.description,
      steps: rec_old.steps,
      ingredientsQte:[]// rec_old.ingredientsQte,   
    };



    rec_old.ingredientsQte.forEach((ing_qte_old:IngredientQte) => {

      const ing_tmp:Ingredient2 = {
        id: ing_qte_old.ingredient.id,
        idUser: 1,
        unit: ing_qte_old.ingredient.unit,           
        name: ing_qte_old.ingredient.name,
        description: ing_qte_old.ingredient.description, 
        price: ing_qte_old.ingredient.price,       
      };

      const ing_qte_new:IngredientQte = {
        ingredient:ing_tmp,
        quantity:ing_qte_old.quantity,
      };

      rec_new.ingredientsQte.push(ing_qte_new);
      console.log(ing_qte_old);
      console.log(ing_qte_new);

    });
  


    bdd.recipestmp.push(rec_new);
    console.log(rec_old);
    console.log(rec_new);
  });

  saveBDD(bdd);         

};