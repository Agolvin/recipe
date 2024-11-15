import { Bdd } from "../models";

import fs from "fs";

const getBDD = () => {
  const data = fs.readFileSync("../bdd.json", "utf8"); //recuperation données depuis bdd.json
  let bdd = JSON.parse(data) as Bdd; //transfert en json dans variable
  return bdd;
};

const saveBDD = (bdd: Bdd) => {
  fs.writeFileSync("../bdd.json", JSON.stringify(bdd)); //enregistrement de tte la bdd.json
};

export { getBDD, saveBDD };
