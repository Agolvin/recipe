//interface = structure



// Recipe,RecipeNew,Unit,Ingredient,Step
//
//




export interface Bdd {
  recipes: Recipe[];
  ingredients: Ingredient[];
}




export interface Recipe {
  id: number;
  name: string;
  description: string;
}







export interface RecipeNew {
  id: number;
  name: string;
  description: string; 
  steps: Step[];
  ingredients: { ingredientId: number; quantity: number }[]; 
}




export interface Unit {
  id: number;
  name: string;
}

export interface Ingredient {
  id: number;
  unitId: number;
  unitName: string;
  name: string;
  description: string; 
  price: number;
}

export interface Step {
  // id: number;        // pour passage un jour sur une vrai bdd
  name: string;         // optionnel??
  description: string; 
}


