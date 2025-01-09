

import { Router } from 'express';
import { getAllRecipes,getRecipe,addRecipe,updateRecipe,getUserRecipes} from './controller';
import { getUserRecipeSv } from './service';

const recetteRouter = Router();

recetteRouter.get('/getall', getAllRecipes); 
recetteRouter.get('/getbyuser/:id', getUserRecipes); 
recetteRouter.get('/get/:id', getRecipe); 
recetteRouter.post('/add', addRecipe);
recetteRouter.post('/update/:id', updateRecipe);

export default recetteRouter;


