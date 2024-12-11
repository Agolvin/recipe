

import { Router } from 'express';
import { getAllIngredients,getIngredient,addIngredient,updateIngredient,saveIngredient} from './controller';

const ingredientRouter = Router();

ingredientRouter.get('/getall', getAllIngredients); 
ingredientRouter.get('/get', getIngredient); 
ingredientRouter.post('/add', addIngredient); 
ingredientRouter.post('/update', updateIngredient);
ingredientRouter.post('/save', saveIngredient);

export default ingredientRouter;



