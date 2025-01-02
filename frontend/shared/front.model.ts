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
//sorte de tableau asso avec string en clé (LITRE/GRAM...) et variable de type Unit en valeur
export const Units: Record<string, Unit> = {       
  LITRE: { name: "litre", symbol: "L" },
  KILOGRAM: { name: "kilogramme", symbol: "kg" },
  GRAM: { name: "gramme", symbol: "g" },
  PIECE: { name: "pièce", symbol: "pcs" },
};
*/


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
  ingredientsQte: { ingredient: Ingredient; quantity: number }[]; //gerer l'ordre des ingredients?
}


export interface Recipe2 {
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


export interface Ingredient2 {      //A utiliser pour MAJ de structure / reprise de données
/*

  id: number;
  unit: Unit;           //objet Unit mappé avec records 
  name: string;
  description: string; 
  price: number;        //à l'unité

*/
}


export interface Ingredient {
  id: number;
  unit: UnitEnum;           //énumération des clé possibles pour les unités
  name: string;
  description: string; 
  price: number;        //à l'unité
}

export interface IngredientQte {
  ingredient: Ingredient;
  quantity: number;
}







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

