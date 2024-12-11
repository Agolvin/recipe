// import { useState } from "react";
// import Input from "./components/Input/Input";
// import "./App.css";
// import { useForm } from "react-hook-form";
// import { Link, Outlet, useLocation, useParams } from "react-router-dom";
// import Button from "./components/Button/Button";

import { Link, Outlet } from "react-router-dom";

//import { recette } from "../../data";
//import React, { useEffect } from "react";

import { ListeRecipe } from "./utils";
import { useEffect, useState } from "react";

import Input from "../../components/Input/Input";

import { useForm } from "react-hook-form";
import { addRecipe } from "./api";
import { RecetteFormProps } from "./RecetteForm.types";
export type FormSchema = {
  title: string;
  description: string;
};

const RecetteForm: React.FC<RecetteFormProps> = ({ fn, defaultValues }) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    setValue,
  } = useForm<{ id: string; title: string; description: string }>(
    defaultValues
      ? { defaultValues }
      : {
          defaultValues: {
            id: "",
            title: "",
            description: "",
          },
        }
  );

  const onSubmit = async (data: FormSchema) => {
    console.log(data);
    try {
      await fn({ ...data, id: defaultValues?.id || "" });
      setValue("title", "");
      setValue("description", "");
    } catch (error) {
      const err = error as Error;
      setError("root", { message: err.message });
    }
  };
  return (
    <form className="grid gap-2" onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("title", {
          required: {
            value: true,
            message: "Vous devez remplir ce champ",
          },
          maxLength: {
            value: 100,
            message: "Le nom ne doit pas depasser 100 caracteres",
          },
          minLength: {
            value: 5,
            message: "Trop court. 5 carac min svp",
          },
        })}
        placeholder="Titre"
      />
      {errors.title && <p>{errors.title.message}</p>}
      <input
        {...register("description", {
          required: true,
        })}
        placeholder="description"
      />
      <button>Submit</button>

      {errors.description && <p>{errors.description.message}</p>}
      {errors.root && <p>{errors.root.message}</p>}
    </form>
  );
};

export default RecetteForm;
