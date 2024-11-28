

import { Router } from 'express';
import { getAllIngredients} from './controller';


// import { getAllIngredients, addIngredient } from './controller';

const router = Router();

router.get('/', getAllIngredients); // GET /ingredients
// router.post('/', addIngredient);    // POST /ingredients

export default router;

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