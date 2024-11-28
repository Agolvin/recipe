

//VIRER index.ts une fois repartit dans les3 autres fichiers



//router appel le controler
//controler interface entre route et service  en controllant les données (isUnit etc....) et gere les code d'erreur http
//service fait toute la logique (connexion/recup/tri...) et peut envoyer des erreurs au  controler qui try/catch


import fs from "fs";
import { Request as req, Response as res } from "express";
import { Bdd, Recipe, RecipeNew, Unit, Ingredient, Step, isIngredient } from "../../../../shared/models/recipe.model";
import { getBDD, saveBDD } from "../../lib/utils";



//delete un ingredient => maj des recettes qui l'utilise??
//passage en inactif pour histo? sans creation de nouvelle recette avec possible?
//pas pour l'instant, stockage des ingredients dans chaque recette en dur
//pas de suppressions d'ingredients pour l'instant

const getIngredient = (req: req, res: res) => {

  console.log("getIngredient id:", req.params.id);
  let bdd = getBDD();


  if (!bdd.ingredients) {
    return res
      .status(500)
      .json({ message: "Données de ingredients inexistantes" });
  }

  let index = bdd.ingredients.findIndex(
    (ingredient) => ingredient.id == Number(req.params.id)
  );

};




const addIngredient = (req: req, res: res) => {

  const data = fs.readFileSync("../bdd.json", "utf8"); //recuperation données depuis bdd.json
  let bdd = JSON.parse(data) as Bdd; //transfert en json dans variable
  const { ingredient }: { ingredient: Ingredient } = req.body; //copie de la recipe du body dans variable locale typé en recipe, parametre vers variable locale

  const maxId = bdd.ingredients.reduce(
    (max, item) => Math.max(max, item.id), 0
  );

  ingredient.id = maxId + 1;
  if (ingredient == undefined) {
    return res.status(418).json({ message: "Paramètre ingredient incorrect" });
  }

  bdd.ingredients.push(ingredient); //ajout dans la copie de bdd, la recipe copie du body de la req
  fs.writeFileSync("../bdd.json", JSON.stringify(bdd)); //enregistrement dde tte la variable bbd qui est une copie tmp du fichier bdd.jdon
  res.status(201).json({ message: "Ingredient ajouté" });
};




//Id = 0 => Add, sinon update

const saveIngredient = (req: req, res: res) => {

  let bdd = getBDD();

  const { ingredient }: { ingredient: Ingredient } = req.body; //copie de la recipe du body dans variable locale typé en recipe, parametre vers variable locale

  //if (ingredient == undefined) {
  if (!isIngredient(ingredient)) {
    return res.status(400).json({ message: "Paramètre ingredient incorrect" });
  }
  if (ingredient.name == 'Caffé') {
    return res.status(418).json({ message: "No cofffee here." });
  }


  //Nouvel ingredient
  if (ingredient.id == 0) {

    console.log("ADD ingredient");

    const maxId = bdd.ingredients.reduce(
      (max, item) => Math.max(max, item.id), 0
    );
    ingredient.id = maxId + 1;

    bdd.ingredients.push(ingredient); //ajout dans la copie de bdd, la recipe copie du body de la req
    saveBDD(bdd);
    res.status(201).json({ message: "Ingredient ajouté" });
  }


  //MAJ ingredient existant
  else {

    console.log("MAJ ingredient: " + ingredient.id);
    let bdd = getBDD();

    let index = bdd.ingredients.findIndex(
      (ingredient) => ingredient.id == Number(req.params.id)
    );

    if (index == -1) return res.status(404).json({ message: "Ingredient introuvable: " + req.params.id + " " + ingredient.name });

    bdd.ingredients[index] = req.body.ingredient;
    saveBDD(bdd);
    res.status(200).json({ message: "Ingredient modifié" });

  }

};


export { getIngredient, addIngredient, saveIngredient };
