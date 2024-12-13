//interface = structure

export interface Bdd {
  recipes: Recipe[];
  ingredients: Ingredient[];
}

/*
export interface Recipe {
  id: number;
  name: string;
  description: string;
}

export function isRecipe (obj: any) : obj is Recipe {
  return(
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.id=== "number" &&
    typeof obj.name=== "string" &&
    typeof obj.description=== "string"
  );
}
*/



export interface Recipe {
  //bPeutEtreIngredient
  //unité + qté
  //bTestée à cocher qui  puisse servir de filtre à la selection des ingredients
  //commentaire libre  
  id: number;
  name: string;
  description: string; 
  steps: Step[];
  ingredientsQte: { ingredient: Ingredient; quantity: number }[]; //gerer l'ordre des ingredients
}

export function isRecipe (obj: any) : obj is Recipe {
  return(
    typeof obj === "object" &&
    obj !== null &&

    typeof obj.id === "number" &&
    typeof obj.name === "string" &&
    typeof obj.description === "string" &&

    Array.isArray(obj.steps) && 
    obj.steps.every(isStep) //&&

    /*
    Array.isArray(obj.ingredientsQte) && 
    obj.ingredientsQte.every((elm: any) => {
      return (
        typeof elm === "object" &&
        elm !== null &&
        typeof elm.quantity === "number" && 
        typeof elm.ingredient === "object" &&
        isIngredient(elm.ingredient)
      );
    })
*/


  );
}


export interface Unit {
  //id: number;
  name: string;
}

export function isUnit (obj: any) : obj is Unit {
  return(
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.name === "string"
  );
}


export interface Ingredient {
  id: number;
  //unitId: number;
  unit: String;
  unitName: string;
  name: string;
  description: string; 
  price: number;        //à l'unité
}

export function isIngredient (obj: any) : obj is Ingredient {
  return(
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.id === "number" &&
    isUnit(obj.unit) &&
    typeof obj.unitName === "string" &&
    typeof obj.name === "string" &&
    typeof obj.description === "string" &&
    typeof obj.price === "number"
  );
}


export interface Step {
  // id: number;        // pour passage un jour sur une vrai bdd
  name: string;         // optionnel??
  description: string; 
}


export function isStep (obj: any) : obj is Step {
  return(
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.name === "string" &&
    typeof obj.description === "string"
  );
}
