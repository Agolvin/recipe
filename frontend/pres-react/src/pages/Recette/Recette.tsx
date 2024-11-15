// import { useState } from "react";
// import Input from "./components/Input/Input";
// import "./App.css";
// import { useForm } from "react-hook-form";
// import { Link, Outlet, useLocation, useParams } from "react-router-dom";
// import Button from "./components/Button/Button";

import { Link, Outlet, useParams } from "react-router-dom";

import { recette } from "../../data";
import { tab_ingredients } from "../../data";

// type formSchema = {
//   email: string;
//   password: string;
// };

function Recette() {
  const { id } = useParams();
  if (!id) return;

  const curr_recette = recette.find((recette) => recette.id === id);
  if (!curr_recette) return;

  console.log(id);

  return (
    <>
      <h1>{curr_recette.title}</h1>
      <p>{curr_recette.description}</p>

      <h1>Ingrédients:</h1>
      <ul>
        {curr_recette.ingredients.map((ingredient_bis) => {
          const curr_ingredient = tab_ingredients.find(
            (tab_ingredients) => tab_ingredients.id === ingredient_bis
          );

          if (!curr_ingredient) return;

          return (
            <li>
              <Link to={`/ingredients/${curr_ingredient.id}`}>
                {curr_ingredient.title}
              </Link>
            </li>
          );
        })}
      </ul>

      <h1>Etapes:</h1>
      <div>
        {curr_recette.etapes.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
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

export default Recette;
