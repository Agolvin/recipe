import { json } from "express";
import { recetteRouter } from "./routes/route.recette";
import ingredientRouter from "./controller/Ingredient/router";

const express = require("express");

const cors = require("cors");
const app = express();
app.use(cors("*"));
app.use(json());

// import { Request as req, Response as res, Express } from "express";

app.use("/recette", recetteRouter);
app.use("/ingredient", ingredientRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
