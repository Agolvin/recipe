import { getIngredients } from "./api";

const ListeIngredient = getIngredients();

console.log("1");
ListeIngredient.then((data) => {
  console.log("2");
  console.log(data);
});

export { ListeIngredient };

// import * as crypto from "crypto";
// const salt = process.env.UUID_SALT;

// const uuid = () => {
//   return crypto.randomUUID();
// };

// export { uuid };
