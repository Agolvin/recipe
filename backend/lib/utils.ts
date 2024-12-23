//import { Bdd } from "../models";

import { Bdd,Recipe,Unit,Ingredient,Step } from "../../shared/models/recipe.model";
import fs from "fs";


export const getBDD = () => {
  console.log("appel de utils/getBDD");

  const pathBDD = "./bdd.json";

  if (!fs.existsSync(pathBDD)) {
    console.log("Current working directory:", process.cwd());
    console.error(`File not found at path: ${pathBDD}`);
  }
  
  const data = fs.readFileSync(pathBDD, "utf8"); //recuperation données depuis bdd.json
  console.log("milieu de utils/getBDD");
  let bdd = JSON.parse(data) as Bdd; //transfert en json dans variable
  console.log("fin de utils/getBDD");
  return bdd;
};

export const saveBDD = (bdd: Bdd) => {
  console.log("appel de utils/saveBDD");
  fs.writeFileSync("../bdd.json", JSON.stringify(bdd)); //enregistrement de tte la bdd.json
  console.log("fin de utils/saveBDD");
};
