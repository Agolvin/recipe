// import { useState } from "react";
// import Input from "./components/Input/Input";
// import "./App.css";
// import { useForm } from "react-hook-form";
// import { Link, Outlet, useLocation, useParams } from "react-router-dom";
// import Button from "./components/Button/Button";

import { Link, Outlet, useParams } from "react-router-dom";

import { tab_ingredients } from "../data";

// type formSchema = {
//   email: string;
//   password: string;
// };

function Ingredient() {
  const { id } = useParams();
  if (!id) return;

  const Int_ID: number | null = id ? parseInt(id, 10) : null;
  const curr_ingredient = tab_ingredients.find(
    (tab_ingredients) => tab_ingredients.id === Int_ID
  );
  if (!curr_ingredient) return;

  console.log(Int_ID);

  return (
    <>
      <h1>{curr_ingredient.title}</h1>
      <img
        src="https://cdn.futura-sciences.com/sources/images/dossier/2038/06-2038.jpg"
        alt="image de l'ingrédient"
      />
      <p>{curr_ingredient.description}</p>
    </>
  );

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   setError,
  // } = useForm<formSchema>();
  // const onSubmit = (data: formSchema) => {
  //   // fetch des donnees
  //   setError("root", {
  //     message: "vous avez oublie un champ",
  //   });
  // };
  // const { id } = useParams();
  // console.log(id);
  // const { pathname } = useLocation();
  // const href = pathname === "/2" ? "./conf" : "/2";
  // return (
  //   <form
  //     style={{ display: "flex", flexDirection: "column" }}
  //     onSubmit={handleSubmit(onSubmit)}
  //   >
  //     <Input label="email" />
  //     <label>
  //       email
  //       <input
  //         type="text"
  //         {...register("email", {
  //           required: {
  //             value: true,
  //             message: "vous devez entrer un email",
  //           },
  //           pattern: {
  //             value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  //             message: "Votre email n'est pas valide",
  //           },
  //         })}
  //       />
  //       {errors.email && <p>{errors.email.message}</p>}
  //     </label>
  //     <label>
  //       mot de passe
  //       <input
  //         type="password"
  //         {...register("password", {
  //           required: {
  //             value: true,
  //             message: "vous devez entrer un mot de passe",
  //           },
  //           pattern: {
  //             value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{12,}$/,
  //             message:
  //               "Votre mot de passe doit contenir au moins 8 caractères, une lettre et un chiffre",
  //           },
  //         })}
  //       />
  //       {errors.password && <p>{errors.password.message}</p>}
  //     </label>
  //     <p className="text-4xl text-red-500">test style class</p>
  //     <button type="submit">Se connecter</button>
  //     {errors.root && <p>{errors.root.message}</p>}
  //     <Link to={href}>confirmer le mdp</Link>
  //     <Button>Tests</Button>
  //     <Outlet />
  //   </form>
  // );
}

export default Ingredient;
