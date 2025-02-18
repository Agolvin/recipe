
'use server';

import { Bdd } from "./model";
import fs from "fs";
import path from "path";
import { Redis } from "@upstash/redis";

//const pathBDD = "@/utils/bdd.json";
//const pathBDD = path.resolve(__dirname,'../../utils/bdd.json');

const pathBDD = path.resolve(process.cwd(), 'src/utils/bdd.json'); // Assurez-vous que ce chemin est correct
//const pathBDD = path.resolve(process.cwd(), 'src/utils/bdd_prod.json'); // Assurez-vous que ce chemin est correct


const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});



//Lecture du fichier json local
export async function getBDDold(): Promise<Bdd> {
  try {
const data = await fs.promises.readFile(pathBDD, "utf8"); //recuperation données depuis bdd.json
const bdd:Bdd = JSON.parse(data) as Bdd; //transfert en json dans variable
return bdd;
  } catch (error) {
    console.error(`❌ Erreur de lecture de la BDD: ${error}`);
    throw new Error("Impossible de charger les données.");
  }
}

//Sauvegarde dans le fichier json local
export async function saveBDDold(bdd: Bdd): Promise<void> {
  try {
    const jsonData = JSON.stringify(bdd, null, 2); // Formatage JSON propre
    await fs.promises.writeFile(pathBDD, jsonData, "utf8"); // Écriture asynchrone
  } catch (error) {
    console.error(`❌ Erreur de sauvegarde de la BDD: ${error}`);
    throw new Error("Impossible d'enregistrer les données.");
  }
}




//Migration json local vers redis
export async function getBDDa(): Promise<Bdd> {
  
  try {
    // Lecture des données locales
    const data = await fs.promises.readFile(pathBDD, "utf8"); 
    const bdd: Bdd = JSON.parse(data); // Conversion en objet

    // Sauvegarde des données dans Redis
    const jsonData = JSON.stringify(bdd, null, 2); // Formatage propre
    await redis.set("bdd", jsonData); // Sauvegarde dans Redis

    const returnBDD:Bdd = bdd;
    return returnBDD;

  } catch (error) {
    console.error(`❌ Erreur de sauvegarde de la BDD: ${error}`);
    throw new Error("Impossible d'enregistrer les données.");}
}




// Lecture des données depuis Redis
export async function getBDD(): Promise<Bdd> {
  try {
    let data = await redis.get("bdd"); // Récupère le JSON stocké
    if (!data) throw new Error("Aucune donnée trouvée dans Redis.");
    if (!data) {
      throw new Error("No data");
    }
    data = JSON.stringify(data);
    if (typeof data !== "string") {
      throw new Error("data not string but " + typeof data);
    }
    if (data.trim() === "") {
      throw new Error("erreur trim");
    }
    const returnBDD: Bdd = JSON.parse(data) as Bdd;
    return returnBDD;
  } catch (error) {
    console.error(`❌ Erreur de lecture de la BDD: ${error}`);
    throw new Error("Impossible de charger les données.");
  }
}



// Sauvegarde des données dans Redis
export async function saveBDD(bdd: Bdd): Promise<void> {
  try {
    const jsonData = JSON.stringify(bdd, null, 2); // Formatage propre
    await redis.set("bdd", jsonData); // Sauvegarde dans Redis
  } catch (error) {
    console.error(`❌ Erreur de sauvegarde de la BDD: ${error}`);
    throw new Error("Impossible d'enregistrer les données.");
  }
}


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