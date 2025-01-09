//interface = structure

export interface Bdd {
  recipes: Recipe[];
  recipestmp: Recipe2[];           //pour migration
  ingredients: Ingredient[];
  ingredientstmp: Ingredient2[];   //pour migration
}

export interface testInterface{
  nom: string,
  unite: Unit
}

export enum testEnum{
  Test1,
  test2,
}


export enum eFormMode{
  ADD = "add",
  UPDATE = "update",
}

export type Unit = {
  name: string;
  symbol: string;
};





export enum UnitEnum {
  GRAM = "GRAM",
  LITRE = "LITRE",
  KILOGRAM = "KILOGRAM",
  PIECE = "PIECE",
}

export const Units: Record<UnitEnum, { name: string; symbol: string }> = {
  [UnitEnum.GRAM]: { name: "gramme", symbol: "g" },
  [UnitEnum.LITRE]: { name: "litre", symbol: "L" },
  [UnitEnum.KILOGRAM]: { name: "kilogramme", symbol: "kg" },
  [UnitEnum.PIECE]: { name: "pièce", symbol: "pc" },
};


/*PARCOURS
Object.entries(Units).forEach(([key, unit]) => {
  console.log(`${key}: ${unit.name} (${unit.abbreviation})`);
});
*/


/*
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



export interface Recipe2 {
}

export interface Recipe {
  id: number;
  idUser: number;         //NEW 
  test: boolean;          //NEW a été etestée et validée
  ingredient: boolean;    //NEW peut etre utilisé en tant qu'ingrédient d'une autre rectte 
  commentaire: string;    //NEW commentaire pour ajuster lors des tests         
  name: string;
  description: string; 
  steps: Step[];
  ingredientsQte: { ingredient: Ingredient; quantity: number }[]; //gerer l'ordre des ingredients?
}


export interface Ingredient2 {
}

export interface Ingredient {      //A utiliser pour MAJ de structure / reprise de données
  id: number;
  idUser: number;           //NEW
  unit: UnitEnum;           //énumération des clé possibles pour les unités
  name: string;
  description: string; 
  price: number;            //à l'unité
}


export interface IngredientQte {
  ingredient: Ingredient;
  quantity: number;
}



/*
export function isRecipe (obj: any) : obj is Recipe {
  return(
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.id === "number" &&
    typeof obj.name === "string" &&
    typeof obj.description === "string" &&

    Array.isArray(obj.steps) && 
    obj.steps.every(isStep) //&&

    
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
  )
  ;
}
*/





/*
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
*/


/*
export function isIngredient (obj: any) : obj is Ingredient {
  return(
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.id === "number" &&
    typeof obj.unit === 'string' && Object.values(UnitEnum).includes(obj.unit as UnitEnum) &&
    typeof obj.name === "string" &&
    typeof obj.description === "string" &&
    typeof obj.price === "number"
  );
}
*/

export interface Step {
  // id: number;        // pour passage un jour sur une vrai bdd
  name: string;         // optionnel??
  description: string; 
}


/*
export function isStep (obj: any) : obj is Step {
  return(
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.name === "string" &&
    typeof obj.description === "string"
  );
}
*/
