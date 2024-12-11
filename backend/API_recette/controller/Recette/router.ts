

import { Router } from 'express';
import { getAllRecipes,getRecipe,addRecipe,updateRecipe} from './controller';

const recetteRouter = Router();

recetteRouter.get('/getall', getAllRecipes); 
recetteRouter.get('/get/:id', getRecipe); 
recetteRouter.post('/add', addRecipe);
recetteRouter.post('/update', updateRecipe);

export default recetteRouter;

