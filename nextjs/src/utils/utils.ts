
'use server';

import { Bdd } from "@/models/models";
import fs from "fs";
import path from "path";

//const pathBDD = "@/utils/bdd.json";
//const pathBDD = path.resolve(__dirname,'../../utils/bdd.json');

const pathBDD = path.resolve(process.cwd(), 'src/utils/bdd.json'); // Assurez-vous que ce chemin est correct
//const pathBDD = path.resolve(process.cwd(), 'src/utils/bdd_prod.json'); // Assurez-vous que ce chemin est correct







export async function getBDD(): Promise<Bdd> {
  try {

/*
    const data = await fs.readFile(pathBDD, "utf8"); // Lecture asynchrone
    return JSON.parse(data) as Bdd; // Parsing JSON
*/

const data = await fs.promises.readFile(pathBDD, "utf8"); //recuperation données depuis bdd.json
const bdd:Bdd = JSON.parse(data) as Bdd; //transfert en json dans variable
return bdd;



/*
    const data = fs.readFileSync(pathBDD, "utf8"); //recuperation données depuis bdd.json
    const bdd:Bdd = JSON.parse(data) as Bdd; //transfert en json dans variable
    return bdd;
    
    */

  } catch (error) {
    console.error(`❌ Erreur de lecture de la BDD: ${error}`);
    throw new Error("Impossible de charger les données.");
  }
}




export async function saveBDD(bdd: Bdd): Promise<void> {
  try {


/*

    const jsonData = JSON.stringify(bdd, null, 2); // Formatage JSON propre
    await fs.writeFile(pathBDD, jsonData, "utf8"); // Écriture asynchrone
*/

    const jsonData = JSON.stringify(bdd, null, 2); // Formatage JSON propre
    await fs.promises.writeFile(pathBDD, jsonData, "utf8"); // Écriture asynchrone



  //  fs.writeFileSync(pathBDD, JSON.stringify(bdd)); //enregistrement de tte la bdd.json   


  } catch (error) {
    console.error(`❌ Erreur de sauvegarde de la BDD: ${error}`);
    throw new Error("Impossible d'enregistrer les données.");
  }
}








/*
export const getBDD = () => {
  if(!fs.existsSync(pathBDD))
    {
      console.error(`File not found at path: ${pathBDD}`);      //renvoyer une erreur au front??
      throw new Error(`La base de données n'est pas initialisée: ${pathBDD}`);
    }
    else
    {
      const data = fs.readFileSync(pathBDD, "utf8"); //recuperation données depuis bdd.json
      const bdd:Bdd = JSON.parse(data) as Bdd; //transfert en json dans variable
      return bdd;
    }
};

export const saveBDD = (bdd: Bdd) => {
  if(!fs.existsSync(pathBDD))
  {
    console.error(`File not found at path: ${pathBDD}`);
    throw new Error(`File not found at path: ${pathBDD}`);
 }
  else
  {
    fs.writeFileSync(pathBDD, JSON.stringify(bdd)); //enregistrement de tte la bdd.json     
  }
};

*/








/*
//import { Bdd,Recipe,Unit,Ingredient,Step } from "../../shared/models/recipe.model";
import { Bdd } from "@/models/models";
import fs from "fs";
import path from 'path'; // Pour gérer les chemins des fichiers



//const pathBDD = "@/utils/bdd.json";
const pathBDD = path.resolve(__dirname, '../utils/bdd.json');



export const getBDD = () => {


  return pathBDD;

  const filePath = path.resolve(__dirname, '@/utils/bdd.json'); // Chemin absolu du fichier JSON
  console.log(filePath);

   // try {
      const data = fs.readFileSync(pathBDD, "utf8"); //recuperation données depuis bdd.json
      let bdd:Bdd = JSON.parse(data) as Bdd; //transfert en json dans variable
      return bdd;

  //  } catch (error) {
   //     console.error('Erreur lors de lecture du fichier JSON:', error);
  //  }











  //if (!fs.existsSync(pathBDD)) {
  // console.error(`File not found at path: ${pathBDD}`);}
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

  const filePath = path.resolve(__dirname, '@/utils/bdd.json'); // Chemin absolu du fichier JSON
  console.log(filePath);

    try {
        fs.writeFileSync(filePath, JSON.stringify(bdd, null, 2), 'utf-8');
        //return { success: true, message: 'Fichier JSON remplacé avec succès.' };
    } catch (error) {
        console.error('Erreur lors de la mise à jour du fichier JSON:', error);
        //return { success: false, message: 'Échec de la mise à jour du fichier JSON.' };
    }




  
  if(!fs.existsSync(pathBDD))
  {
    console.error(`File not found at path: ${pathBDD}`);
  }
  else
  {
    fs.writeFileSync(pathBDD, JSON.stringify(bdd)); //enregistrement de tte la bdd.json     
  }


};
*/