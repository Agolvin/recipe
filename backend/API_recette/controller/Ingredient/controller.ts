


import { Request as req, Response as res } from "express";
import { addIngredientSv,getAllIngredientsSv } from './service';
import { Bdd,Recipe,Ingredient, isIngredient } from "../../../../shared/models/recipe.model";


export const getAllIngredients = async (res: res) => {
  try {
    const ingredients:Ingredient[] = await getAllIngredientsSv();
    res.status(200).json(ingredients);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des ingredients" });
  }
};


export const addIngredient = async (req: req, res: res) => {

  if (!isIngredient(req.body)) {
    return res.status(400).json({ message: "Format paramètre ingrédient incorrect" });
  }

  const newIngredient:Ingredient = req.body;

  try {
    const ingredients = await addIngredientSv(newIngredient);
    //uniquement la ligne suivante si pas besoin de récupérer les données ajoutées en base
    //ex: l'ID peut etre utile à retourner lors d'un ajout, ou tout l'obj pour trace de debug coté server
    //await addIngredientSv(newIngredient);
    res.status(201).json({ message: "Ingrédient ajouté", ingredients });
  } 
  catch (error) {
    res.status(500).json({ message: "Erreur lors de l'ajout d'un ingredient" });
  }
};








/*

//export const getAllIngredients = async (req: req, res: res) => {
  export const getAllIngredients = async (res: res) => {
    try {
      const ingredients = await getAllIngredientsSv();
      res.status(200).json(ingredients);
    } catch (error: any) {
      
      const statusCode = error.statusCode || 500;
      const message = error.message || "Erreur lors de la récupération des ingrédients";
      res.status(statusCode).json({ message });

    }
  };

*/
  
  



/*

export const addIngredient = async (req: Request, res: Response) => {
  const { name, quantity } = req.body;
  if (!name || !quantity) {
    return res.status(400).json({ message: "Name and quantity are required" });
  }
  const newIngredient = await addIngredientSv({ name, quantity });
  res.status(201).json(newIngredient);
};

*/
