

import { Request as req, Response as res } from "express";
import { migrationToolsSv, testToolsSv } from './service';


export const testTools = async (req: req, res: res) => {
    try {
        const recette = await testToolsSv();
        res.status(201).json({ message: "testToolsSv OK" });
    }
    catch (error) {
        res.status(500).json({ message: "Erreur lors de testToolsSv" });
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
    
    console.log("migrationTools");

    try {
        const recette = await migrationToolsSv();
        res.status(201).json({ message: "migrationToolsSv OK" });
    }
    catch (error) {
        res.status(500).json({ message: "Erreur lors de migrationToolsSv" });
    }
    
};

