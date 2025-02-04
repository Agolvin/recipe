

import React from "react";
//import Link from "next/link";

//const NavBar: React.FC = ({ ...props }) => {
const IngredientForm: React.FC = () => {
  return (


    <h1>Formulaire ingredient soon (add/update)</h1>


  );
};

export default IngredientForm;




/*

'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface IngredientFormProps {
  initialData?: { name: string }; // Données initiales pour la modification
  onSubmit: (data: { name: string }) => Promise<void>; // Fonction pour gérer la soumission
}

export default function IngredientForm({ initialData, onSubmit }: IngredientFormProps) {
  const [name, setName] = useState(initialData?.name || '');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await onSubmit({ name });
      router.push('/ingredients'); // Redirige vers la liste après succès
    } catch (error) {
      console.error('Erreur lors de la soumission :', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label htmlFor="name">Nom de l'ingrédient :</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border rounded p-2"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
        disabled={isLoading}
      >
        {isLoading ? 'Chargement...' : 'Soumettre'}
      </button>
    </form>
  );
}

*/





