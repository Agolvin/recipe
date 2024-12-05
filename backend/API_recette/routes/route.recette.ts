import { Router } from "express";
import {
  addRecipe,
  deleteRecipe,
  getAllRecipes,
  saveRecipe,
  getRecipe,
} from "../controller/Recette";

const express = require("express");
const router: Router = express.Router();

router.get("/getall", getAllRecipes);
router.delete("/delete/:id", deleteRecipe);
router.post("/addRecipe", addRecipe);

router.post("/update/:id", saveRecipe);
router.get("/get/:id", getRecipe);




/*
const ingredientRouter = require('./ingredientRouter');
router.use('/ingredients', ingredientRouter);

*/



export { router as recetteRouter };

/*

const express = require("express");
const ingredientRoutes = require("./routes/ingredient.routes");

const app = express();
app.use(express.json());

// Charge les routes des ingrédients
app.use("/ingredients", ingredientRoutes);

// Démarre le serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


*/