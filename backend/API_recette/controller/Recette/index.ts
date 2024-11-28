import fs from "fs";
import { Request as req, Response as res } from "express";
//import { Bdd } from "../../models";
//import { Recipe } from "../../models/recipe.model";
import { Bdd,Recipe } from "../../../../shared/models/recipe.model";
//import { Recipe } from "@models/recipe.model";
import { getBDD, saveBDD } from "../../lib/utils";


/*
const getAllRecipesOld = (req: req, res: res) => {
  res.status(200).json([
    { id: 1, name: "Recette 1" },
    { id: 2, name: "Recette 2" },
  ]);
};
*/


const getAllRecipes = (req: req, res: res) => {
  const data = fs.readFileSync("../bdd.json", "utf8"); //recuperation données depuis bdd.json
  let bdd = JSON.parse(data) as Bdd;      //transfert en json dans variable

  if (!bdd.recipes) {
    return res
      .status(500)
      .json({ message: "Données de recettes inexistantes" });
  }

  res.status(200).json(bdd.recipes);
};



const deleteRecipe = (req: req, res: res) => {
  console.log("debut deleteRecipe");
  const data = fs.readFileSync("../bdd.json", "utf8"); //recuperation données depuis bdd.json
  let bdd = JSON.parse(data) as Bdd; //transfert en json dans variable

  if (!bdd.recipes.find((recipe: Recipe) => recipe.id === Number(req.params.id))) {
    //si recette inexistante (id)
    return res.status(404).json({ message: "Recette introuvable: " + req.params.id }); //message d'erreur
  }

  console.log("bdd.recipes avant delete:", bdd.recipes);

  bdd.recipes = bdd.recipes.filter(
    //recipe est un objet du tableau recipes parcouru (equivalent for each)
    (recipe: Recipe) => recipe.id !== Number(req.params.id) //copie dans lui meme de tt les elts dont ID different du parametre.
  );

  console.log("bdd.recipes apres delete:", bdd.recipes);

  fs.writeFileSync("../bdd.json", JSON.stringify(bdd)); //enregistrement dde tte la variable bbd qui est une copie tmp du fichier bdd.jdon

  res.status(200).json({ message: "Recette supprimé" });
};

const addRecipe = (req: req, res: res) => {
  const data = fs.readFileSync("../bdd.json", "utf8"); //recuperation données depuis bdd.json
  let bdd = JSON.parse(data) as Bdd; //transfert en json dans variable
  const { recipe }: { recipe: Recipe } = req.body; //copie de la recipe du boy dans variable locale typé en recipe

  bdd.recipes;

  const maxId = bdd.recipes.reduce(
    (max, item) => Math.max(max, item.id),0
  );

  recipe.id = maxId + 1;
  if (recipe == undefined) {
    return res.status(418).json({ message: "Paramètre recipe incorrect" });
  }

  bdd.recipes.push(recipe); //ajout dans la copie de bdd, la recipe copie du body de la req
  fs.writeFileSync("../bdd.json", JSON.stringify(bdd)); //enregistrement dde tte la variable bbd qui est une copie tmp du fichier bdd.jdon
  res.status(200).json({ message: "Recette ajoutée" });
};

const saveRecipe = (req: req, res: res) => {
  console.log("debut saveRecipe");
  let bdd = getBDD();

  if (!bdd.recipes.find((recipe) => recipe.id === Number(req.params.id))) {
    //(recipe) => recipe.id === Number(req.params.id) :  definition d'une fonction
    // (parametres fonctions) => corp de la fonction
    // =>: separateur entre param et corp de la fonction
    //(recipe): nommage de l'element du tableau parcouru pour utilisation dans la fonction de comparaison 
    //
    return res.status(404).json({ message: "Recette introuvable" }); //message d'erreur
  }

  let index = bdd.recipes.findIndex(
    (recipe) => recipe.id == Number(req.params.id)
  );
  bdd.recipes[index] = req.body.recipe;
  saveBDD(bdd);
  res.status(200).json({ message: "Recette modifié" });
};

const getRecipe = (req: req, res: res) => {
  console.log("getRecipe id:",req.params.id);
  let bdd = getBDD();

  if (!bdd.recipes) {
    return res
      .status(500)
      .json({ message: "Données de recettes inexistantes" });
  }

  let index = bdd.recipes.findIndex(
    (recipe) => recipe.id == Number(req.params.id)
  );

  if (index == -1) {
    return res.status(404).json({ message: "Recette introuvable" }); //message d'erreur
  }
  return res.status(200).json(bdd.recipes[index]);
};

export { getAllRecipes, deleteRecipe, addRecipe, saveRecipe, getRecipe };
