

import { Request as req, Response as res } from "express";
import { getAllRecipesSv, getRecipeSv, addRecipeSv,updateRecipeSv,getUserRecipeSv } from './service';
import {  Recipe } from "../../shared/back.model";
import { getUserIngredientsSv } from "../Ingredient/service";


export const getAllRecipes = async (req: req, res: res) => {
    try {
        const recipes: Recipe[] = await getAllRecipesSv();
        console.log("Envoi de tte les recipes: ",recipes);
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des recettes" });
    }
};





export const getUserRecipes = async (req: req, res: res) => {
  console.log("getUserRecipes");
  try {
    const idUser = parseInt(req.params.id, 10);
    console.log("getUserRecipes id=", idUser)
    const recipes:Recipe[] = await getUserRecipeSv(idUser);
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des recettes" });
  }
};

/*
export const getRecipe = async (req: req, res: res) => {
    try {
        if (typeof req.body !== "number") {
            return res.status(400).json({ message: "Format paramètre id incorrect" });
        }
        const recette: Recipe = await getRecipeSv(req.body);
        res.status(200).json(recette);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération de la rectte" });
    }
};
*/
export const getRecipe = async (req: req, res: res) => {
    console.log("getRecipe", req);
    try {
        const id = parseInt(req.params.id, 10);
        console.log("getRecipe id=", id)
        if (isNaN(id)) {
            return res.status(400).json({ message: "Format paramètre id incorrect" });
        }
        const recette = await getRecipeSv(id);
        console.log("retour controller recipe", recette);
        res.status(200).json(recette);
    } catch (error) {
        console.log("Erreur lors de la récupération de la recette");
        res.status(500).json({ message: "Erreur lors de la récupération de la recette" });
    }
};




export const addRecipe = async (req: req, res: res) => {
    console.log("addRecipe", req);
  //  if (!isRecipe(req.body)) {
  //      return res.status(400).json({ message: "Format paramètre recette incorrect" });
  //  }
    const newRecipe: Recipe = req.body;
    try {
        const recette = await addRecipeSv(newRecipe);
        res.status(201).json({ message: "Recette ajouté", recette });
    }
    catch (error) {
        res.status(500).json({ message: "Erreur lors de l'ajout de la recette" });
    }
};




export const updateRecipe = async (req: req, res: res) => {
    console.log("updateRecipe");


    /*
    if(!isRecipe(req.body.data)){
        console.log("updateRecipe Format paramètre recette incorrect", req.body.data);
        return res.status(400).json({ message: "Format paramètre recette incorrect" });
    }
    */
   
    const recipe: Recipe = req.body.data;
    try {
        const recette = await updateRecipeSv(recipe);
        console.log("Recette enregistrée", req.body.data);
        res.status(201).json({ message: "Recette enregistrée", recette });
    }
    catch (error) {
        console.log("Erreur lors de l'enregistrement de la recette");
        res.status(500).json({ message: "Erreur lors de l'enregistrement de la recette" });
    }

}



