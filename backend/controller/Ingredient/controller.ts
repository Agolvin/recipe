
import { Request as req, Response as res } from "express";
import { getAllIngredientsSv,getIngredientSv,addIngredientSv,updateIngredientSv,saveIngredientSv } from './service';
import { Ingredient } from "../../shared/back.model";


export const getAllIngredients = async (req: req, res: res) => {
  console.log("getAllIngredients");
  try {
    const ingredients:Ingredient[] = await getAllIngredientsSv();
    res.status(200).json(ingredients);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des ingredients" });
  }
};


export const getIngredient = async (req: req, res: res) => {
  try {
    console.log("getIngredient");

    const id = parseInt(req.params.id, 10);
    console.log("getIngredient id=", id)
    if (isNaN(id)) {
        return res.status(400).json({ message: "Format paramètre id incorrect" });
    }
    const ingredient = await getIngredientSv(id);
    console.log("ingredient getIngredient ",ingredient);
    res.status(200).json(ingredient);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération de l'ingredient" });
  }
};






export const addIngredient = async (req: req, res: res) => {

  console.log("addIngredient");
  /*
  if (!isIngredient(req.body)) {
    console.log("Format paramètre ingrédient incorrect");
    return res.status(400).json({ message: "Format paramètre ingrédient incorrect" });
  }
*/
  const newIngredient:Ingredient = req.body;

  try {
    const ingredient = await addIngredientSv(newIngredient);
    console.log("Ingrédient ajouté");
    res.status(201).json({ message: "Ingrédient ajouté", ingredient });
  } 
  catch (error) {
    console.log("Erreur lors de l'ajout d'un ingredient");
    res.status(500).json({ message: "Erreur lors de l'ajout d'un ingredient" });
  }
};


export const updateIngredient = async (req: req, res: res) => {
  console.log("updateIngredient");
/*
  if(!isIngredient(req.body)){
      console.log("Format paramètre ingredient incorrect",req.body);
      return res.status(400).json({ message: "Format paramètre ingredient incorrect" });
  }
*/
  try {
      const ingredient = await updateIngredientSv(req.body.data);
      console.log("Ingredient enregistré");
      res.status(201).json({ message: "Ingredient enregistré", ingredient });
  }
  catch (error) {
    console.log("Erreur lors de l'enregistrement de l'ingredient");
      res.status(500).json({ message: "Erreur lors de l'enregistrement de l'ingredient" });
  }
}


export const saveIngredient = async (req: req, res: res) => {
 /*
  if(!isIngredient(req.body)){
      return res.status(400).json({ message: "Format paramètre ingredient incorrect" });
  }
*/
  try {
      const ingredient = await saveIngredientSv(req.body);
      res.status(201).json({ message: "Ingredient enregistré", ingredient });
  }
  catch (error) {
      res.status(500).json({ message: "Erreur lors de l'enregistrement de l'ingredient" });
  }
}



