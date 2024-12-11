

import { Request as req, Response as res } from "express";
import { getAllRecipesSv, getRecipeSv, addRecipeSv,updateRecipeSv } from './service';
import {  Recipe, isRecipe } from "../../../../shared/models/recipe.model";


export const getAllRecipes = async (req: req, res: res) => {
    try {
        const recipes: Recipe[] = await getAllRecipesSv();
        console.log("Envoi de tte les recipes: ",recipes);
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
    try {
        const id = parseInt(req.params.id, 10);
        console.log("getRecipe id=", id)
        if (isNaN(id)) {
            return res.status(400).json({ message: "Format paramètre id incorrect" });
        }
        const recette = await getRecipeSv(id);
        console.log("retour controller", recette);
        res.status(200).json(recette);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération de la recette" });
    }
};









export const addRecipe = async (req: req, res: res) => {
    if (!isRecipe(req.body)) {
        return res.status(400).json({ message: "Format paramètre recette incorrect" });
    }
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

    if(!isRecipe(req.body)){
        return res.status(400).json({ message: "Format paramètre recette incorrect" });
    }
    
    const recipe: Recipe = req.body;
    try {
        const recette = await updateRecipeSv(recipe);
        res.status(201).json({ message: "Recette enregistrée", recette });
    }
    catch (error) {
        res.status(500).json({ message: "Erreur lors de l'enregistrement de la recette" });
    }

}



