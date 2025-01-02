

import { Ingredient,Ingredient2, Recipe2, UnitEnum } from "../../shared/back.model";
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
      ingredientsQte: rec_old.ingredientsQte,   
    };

    bdd.recipestmp.push(rec_new);
    console.log(rec_old);
    console.log(rec_new);
  });




/*

  bdd.ingredients.forEach((ing_old) => {
    const ing_new:Ingredient2 = {
      id: ing_old.id,
      unit: UnitEnum.GRAM,           
      name: ing_old.name,
      description: ing_old.description, 
      price: ing_old.price,       
    };
    switch(ing_old.id) {
      case 1:
        ing_new.unit = UnitEnum.GRAM
        break;
      case 2:
        ing_new.unit = Units.LITRE
        break;
      case 3:
        ing_new.unit = Units.KILOGRAM
        break;
      case 4:
        ing_new.unit = Units.KILOGRAM
        break;
      case 5:
        ing_new.unit = Units.LITRE
        break;
      case 6:
        ing_new.unit = Units.PIECE
        break;
      default:
        ing_new.unit = Units.GRAM
    } 
    bdd.ingredientstmp.push(ing_new);
    console.log(ing_old);
    console.log(ing_new);
  });
*/

  saveBDD(bdd);         

};