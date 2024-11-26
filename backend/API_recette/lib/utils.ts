//import { Bdd } from "../models";

import { Bdd,Recipe,RecipeNew,Unit,Ingredient,Step } from "../../../shared/models/recipe.model";


import fs from "fs";

export const getBDD = () => {
  const data = fs.readFileSync("../bdd.json", "utf8"); //recuperation données depuis bdd.json
  let bdd = JSON.parse(data) as Bdd; //transfert en json dans variable
  return bdd;
};

export const saveBDD = (bdd: Bdd) => {
  fs.writeFileSync("../bdd.json", JSON.stringify(bdd)); //enregistrement de tte la bdd.json
};
