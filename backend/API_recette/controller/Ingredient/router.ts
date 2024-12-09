

import { Router } from 'express';
import { getAllIngredients,getIngredient,addIngredient} from './controller';

const ingredientRouter = Router();

ingredientRouter.get('/getall', getAllIngredients); // GET /ingredients
ingredientRouter.get('/get', getIngredient); // GET /ingredients
ingredientRouter.post('/add', addIngredient);    // POST /ingredients

export default ingredientRouter;

/*
const express = require("express");
const router = express.Router();
const ingredientController = require("./ingredient.controller");

// Endpoint pour récupérer tous les ingrédients
router.get("/", ingredientController.getAllIngredients);

// Endpoint pour ajouter un nouvel ingrédient
router.post("/", ingredientController.addIngredient);

// Endpoint pour supprimer un ingrédient par son ID
router.delete("/:id", ingredientController.deleteIngredient);

module.exports = router;*/