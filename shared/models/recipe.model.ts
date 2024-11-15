//interface = structure
export interface Recipe {
  id: number;
  name: string;
  description: string;
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

export interface RecipeNew {
  id: number;
  name: string;
  description: string; 
  steps: Step[];
  ingredients: { ingredientId: number; quantity: number }[]; 
}








