


import { Request as req, Response as res } from "express";
import { getAllIngredientsSv } from './service';




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



export const getAllIngredients = async (req: req, res: res) => {
  try {
    const ingredients = await getAllIngredientsSv();
    res.status(200).json(ingredients);
  } catch (error) {
    res.status(500).json({ message: "Error fetching ingredients" });
  }
};


