

/*
Utilisez un type guard pour garantir que les données respectent une interface TypeScript.
Puis appliquez un validator pour vérifier les contraintes métier spécifiques.

Exemple combiné :

type Ingredient = {
name: string;
quantity: number;
};

const isIngredient = (data: any): data is Ingredient => {
return typeof data.name === 'string' && typeof data.quantity === 'number';
};

const validateIngredient = (ingredient: Ingredient) => {
if (!ingredient.name) throw new Error('Name is required');
if (ingredient.quantity <= 0) throw new Error('Quantity must be positive');
};

// Utilisation
const data: unknown = { name: "Tomato", quantity: 5 };

if (isIngredient(data)) {
validateIngredient(data); // TypeScript garantit que `data` est un Ingredient
console.log("Valid ingredient");
} else {
console.error("Invalid data type");
}


*/































/*


1. Organisation du projet

Exemple de structure pour un thème ingredient :

src/
├── ingredients/
│   ├── ingredientRouter.js
│   ├── ingredientController.js
│   ├── ingredientService.js
│   ├── ingredientValidator.js
│   ├── ingredientTypes.ts
│   └── ingredientRepository.js
├── common/
│   ├── validators/
│   │   └── commonValidator.js
│   └── types/
│       └── commonTypes.ts
├── app.js

Dossier dédié pour chaque thème

Chaque thème (par exemple, ingredients) contient ses propres fichiers de logique métier, API, et ses règles spécifiques :

    Router : Définit les routes HTTP.
    Controller : Gère les requêtes et réponses.
    Service : Contient la logique métier.
    Validator : Valide les données spécifiques à ce thème.
    Types : Définit les types ou interfaces spécifiques au thème.
    Repository (facultatif) : Pour accéder à la base de données.

2. Où placer les fichiers de types ?
Types TypeScript

    Types spécifiques à un thème : Placez-les dans le dossier du thème, dans un fichier ingredientTypes.ts ou équivalent.
        Ces types sont utilisés uniquement dans ce thème.
    Types communs (réutilisables entre plusieurs thèmes) : Placez-les dans un dossier global, comme common/types/commonTypes.ts.

Exemple : ingredientTypes.ts

export interface Ingredient {
    name: string;
    quantity: number;
}

export interface CreateIngredientDto {
    name: string;
    quantity: number;
}

Exemple : commonTypes.ts

export type ID = string | number;

export interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
}

3. Où placer les validators ?
Validators spécifiques à un thème

    Placez-les dans le dossier du thème, comme ingredientValidator.js.
    Ces fichiers doivent valider uniquement les règles propres à ce thème.

Validators réutilisables

    Placez les fonctions de validation générale (ex. : vérifier une chaîne non vide, une adresse e-mail, etc.) dans un fichier ou dossier global comme common/validators/commonValidator.js.

Exemple : ingredientValidator.js

const validateIngredient = (data) => {
    if (!data.name || typeof data.name !== 'string') {
        throw new Error('Name is required and must be a string.');
    }
    if (!data.quantity || typeof data.quantity !== 'number' || data.quantity <= 0) {
        throw new Error('Quantity is required and must be a positive number.');
    }
};

module.exports = { validateIngredient };

Exemple : commonValidator.js

const isNonEmptyString = (value) => {
    return typeof value === 'string' && value.trim().length > 0;
};

const isPositiveNumber = (value) => {
    return typeof value === 'number' && value > 0;
};

module.exports = { isNonEmptyString, isPositiveNumber };

4. Qui appelle quoi ?
Le contrôleur appelle les validators

    Les données issues de la requête sont validées dans le contrôleur avant d’être envoyées au service.
    Le contrôleur utilise le validator du thème pour effectuer la validation.

Le service utilise les types

    Le service manipule des données fortement typées (en TypeScript) pour garantir que les données respectent la structure définie.

5. Exemple complet
Controller :

const { validateIngredient } = require('./ingredientValidator');
const ingredientService = require('./ingredientService');

const createIngredient = async (req, res) => {
    try {
        const data = req.body;

        // Appeler le validator pour valider les données
        validateIngredient(data);

        // Appeler le service pour la logique métier
        const result = await ingredientService.createIngredient(data);

        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { createIngredient };

Service :

import { Ingredient, CreateIngredientDto } from './ingredientTypes';

const createIngredient = async (data: CreateIngredientDto): Promise<Ingredient> => {
    // Logique métier
    return {
        name: data.name,
        quantity: data.quantity,
    };
};

export default { createIngredient };

Validator :

const { isNonEmptyString, isPositiveNumber } = require('../common/validators/commonValidator');

const validateIngredient = (data) => {
    if (!isNonEmptyString(data.name)) {
        throw new Error('Invalid name: must be a non-empty string.');
    }
    if (!isPositiveNumber(data.quantity)) {
        throw new Error('Invalid quantity: must be a positive number.');
    }
};

module.exports = { validateIngredient };

6. Avantages de cette structure :

    Lisibilité : Les types et validators sont clairement séparés.
    Réutilisabilité : Les validators et types communs peuvent être partagés entre les thèmes.
    Séparation des préoccupations : Chaque couche (contrôleur, service, validation) a une responsabilité unique.
    Modularité : Les validators et types spécifiques restent dans leur thème, tandis que les parties communes sont centralisées.


*/












