// import { useState } from "react";
// import Input from "./components/Input/Input";
// import "./App.css";
// import { useForm } from "react-hook-form";
// import { Link, Outlet, useLocation, useParams } from "react-router-dom";
// import Button from "./components/Button/Button";

import { Link, Outlet } from "react-router-dom";

import { recette } from "../../data";
//import React, { useEffect } from "react";

import { getRecipes } from "./api";

import { ListeRecipe } from "./utils";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { deleteRecipe } from "../Recette/api";

// type formSchema = {
//   email: string;
//   password: string;
// };

function Recettes() {
  const RELOAD_QUERY_OPTIONS = {
    cacheTime: 0,
  } as const;

  const { isLoading, data, isError, error, refetch } = useQuery({
    queryKey: ["recipes"],
    queryFn: getRecipes,
    ...RELOAD_QUERY_OPTIONS,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return (
      <div>
        <p>{error.message}</p>
        <button onClick={() => refetch()}>Recharger</button>
      </div>
    );
  }
  if (!data) return;
  return (
    <>
      <Link to="./add">Nouvelle recette </Link>

      <ul>
        {data.map((r) => {
          return (
            <li key={r.id}>
              <Link to={`./${r.id}`}>Titre : {r.title}</Link>{" "}
              <Link to={`./update/${r.id}`}> modifier </Link>
              <button onClick={() => deleteRecipe(r.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
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

export default Recettes;