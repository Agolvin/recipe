


import { Request as req, Response as res } from "express";
import { getAllIngredientsSv } from './service';






export const getAllIngredients = async (res: res) => {
  try {
    const ingredients = await getAllIngredientsSv();
    res.status(200).json(ingredients);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des ingredients" });
  }
};




export const addIngredient = async (req: req, res: res) => {
  try {

    



    const ingredients = await addIngredientSv();
    res.status(201).json({ message: "Ingrédient ajouté" });
  } catch (error) {
    res.status(500).json({ message: "Erreur l'ajout d'un ingredient" });
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
