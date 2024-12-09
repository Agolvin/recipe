
import { Request as req, Response as res } from "express";
import { getAllIngredientsSv,getIngredientSv,addIngredientSv,updateIngredientSv,saveIngredientSv } from './service';
import { Ingredient, isIngredient } from "../../../../shared/models/recipe.model";


export const getAllIngredients = async (req: req, res: res) => {
  try {
    const ingredients:Ingredient[] = await getAllIngredientsSv();
    res.status(200).json(ingredients);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des ingredients" });
  }
};


export const getIngredient = async (req: req, res: res) => {
  try {
    if (typeof req.body !== "number") {
      return res.status(400).json({ message: "Format paramètre id incorrect" });
    }
    const idIngredient:number = req.body;
    const ingredient:Ingredient = await getIngredientSv(idIngredient);
    res.status(200).json(ingredient);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération de l'ingredient" });
  }
};


export const addIngredient = async (req: req, res: res) => {
  if (!isIngredient(req.body)) {
    return res.status(400).json({ message: "Format paramètre ingrédient incorrect" });
  }

  const newIngredient:Ingredient = req.body;

  try {
    const ingredient = await addIngredientSv(newIngredient);
    //uniquement la ligne suivante si pas besoin de récupérer les données ajoutées en base
    //ex: l'ID peut etre utile à retourner lors d'un ajout, ou tout l'obj pour trace de debug coté server
    //await addIngredientSv(newIngredient);
    res.status(201).json({ message: "Ingrédient ajouté", ingredient });
  } 
  catch (error) {
    res.status(500).json({ message: "Erreur lors de l'ajout d'un ingredient" });
  }
};


export const updateIngredient = async (req: req, res: res) => {
  if(!isIngredient(req.body)){
      return res.status(400).json({ message: "Format paramètre ingredient incorrect" });
  }
  try {
      const ingredient = await updateIngredientSv(req.body);
      res.status(201).json({ message: "Ingredient enregistré", ingredient });
  }
  catch (error) {
      res.status(500).json({ message: "Erreur lors de l'enregistrement de l'ingredient" });
  }
}


export const saveIngredient = async (req: req, res: res) => {
  if(!isIngredient(req.body)){
      return res.status(400).json({ message: "Format paramètre ingredient incorrect" });
  }
  try {
      const ingredient = await saveIngredientSv(req.body);
      res.status(201).json({ message: "Ingredient enregistré", ingredient });
  }
  catch (error) {
      res.status(500).json({ message: "Erreur lors de l'enregistrement de l'ingredient" });
  }
}



