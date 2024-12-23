

import { Router } from 'express';
import { getAllIngredients,getIngredient,addIngredient,updateIngredient,saveIngredient} from './controller';

const ingredientRouter = Router();

ingredientRouter.get('/getall', getAllIngredients); 
ingredientRouter.get('/get/:id', getIngredient); 
ingredientRouter.post('/add', addIngredient); 
ingredientRouter.post('/update/:id', updateIngredient);     //retirer id? inutile car dans le corp de la req??
ingredientRouter.post('/save', saveIngredient);

export default ingredientRouter;



