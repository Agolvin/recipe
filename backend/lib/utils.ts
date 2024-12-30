

//import { Bdd,Recipe,Unit,Ingredient,Step } from "../../shared/models/recipe.model";
import { Bdd } from "../shared/back.model";
import fs from "fs";

const pathBDD = "./bdd.json";

export const getBDD = () => {
  //if (!fs.existsSync(pathBDD)) {console.error(`File not found at path: ${pathBDD}`);}
  if(!fs.existsSync(pathBDD))
    {
      console.error(`File not found at path: ${pathBDD}`);      //renvoyer une erreur au front??
      throw new Error(`La base de données n'est pas initialisée: ${pathBDD}`);
    }
    else
    {
      const data = fs.readFileSync(pathBDD, "utf8"); //recuperation données depuis bdd.json
      let bdd:Bdd = JSON.parse(data) as Bdd; //transfert en json dans variable
      return bdd;
    }
};

export const saveBDD = (bdd: Bdd) => {
  //if (!fs.existsSync(pathBDD)) {console.error(`File not found at path: ${pathBDD}`);}   //renvoyer erreur
  if(!fs.existsSync(pathBDD))
  {
    console.error(`File not found at path: ${pathBDD}`);
  }
  else
  {
    fs.writeFileSync(pathBDD, JSON.stringify(bdd)); //enregistrement de tte la bdd.json     
  }
};
