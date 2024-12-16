

import { Request as req, Response as res } from "express";
import { migrationToolsSv, testToolsSv } from './service';
import {  Recipe, isRecipe } from "../../../../shared/models/recipe.model";





export const testTools = async (req: req, res: res) => {
    try {
        const recette = await testCommonSv();
        res.status(201).json({ message: "testCommonSv OK" });
    }
    catch (error) {
        res.status(500).json({ message: "Erreur lors de testCommonSv" });
    }
    /*
    console.log("addRecipe", req);
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
    */


};


export const migrationTools = async (req: req, res: res) => {
    
    console.log("migrationCommon");

    try {
        const recette = await migrationCommonSv();
        res.status(201).json({ message: "migrationCommonSv OK" });
    }
    catch (error) {
        res.status(500).json({ message: "Erreur lors de migrationCommonSv" });
    }
    



};

