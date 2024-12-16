import { json } from "express";
//import { recetteRouter } from "./routes/route.recette";


import recetteRouter from "./controller/Recette/router";
import ingredientRouter from "./controller/Ingredient/router";
import toolsRouter from "./controller/Tools/router";

const express = require("express");

const cors = require("cors");
const app = express();
app.use(cors("*"));
app.use(json());

// import { Request as req, Response as res, Express } from "express";

app.use("/recette", recetteRouter);
app.use("/ingredient", ingredientRouter);
app.use("/tools", toolsRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
