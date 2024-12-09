


import { Request as req, Response as res } from "express";
import { getAllIngredientsSv,getIngredientSv,addIngredientSv } from './service';
import { Bdd,Recipe,Ingredient, isIngredient } from "../../../../shared/models/recipe.model";


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
