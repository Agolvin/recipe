
//'use client';

import { Ingredient } from '@/utils/model';
//import { useRouter } from 'next/navigation';

//import { use, useEffect, useState } from 'react';

//export default async function IngredientPage({ params }: { params: { id: string } }) {
export default async function IngredientPage() {
  //const router = useRouter();
  console.log('IngredientPage');


  //const unwrappedParams = await params;




  //const unwrappedParams = use(params);

    //const { id } = params;




    /*
    const router = useRouter();
    const { id } = router.query;
    const [recipe, setRecipe] = useState<Recipe | null>(null);
  
    useEffect(() => {
      if (id) {
        fetch(`/api/recipes/${id}`)
          .then((res) => res.json())
          .then((data: Recipe) => setRecipe(data));
      }
    }, [id]);
  
    if (!recipe) return <div>Loading...</div>;

*/




    const ingTEST:Ingredient = {
        id: 0,
        idUser: 0,
        unit: '',
        name: 'Ing test',
        description: 'Description ingredient',
        price: 0
    };
/*
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    if (params.id) {
      fetch(`/api/recipes/${params.id}`)
        .then((res) => res.json())
        .then((data) => setRecipe(data));
    }
  }, [params.id]);

  if (!recipe) return <div>Loading...</div>;


*/







return(
<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
 



       
            <p> Détails ingrédient standard de test</p>


            <div>
                <h1>{ingTEST.name}</h1>
                <p>{ingTEST.description}</p>
            </div>
        

   
      </main>
    </div>

);
}





/*

export default function IngredientPage({ params }: { params: { id: string } }) {
    console.log('IngredientPage');
    const router = useRouter();

    //const { id } = router.query;
    const { id } = params;




    /*
    const router = useRouter();
    const { id } = router.query;
    const [recipe, setRecipe] = useState<Recipe | null>(null);
  
    useEffect(() => {
      if (id) {
        fetch(`/api/recipes/${id}`)
          .then((res) => res.json())
          .then((data: Recipe) => setRecipe(data));
      }
    }, [id]);
  
    if (!recipe) return <div>Loading...</div>;

*/
/*



    let ingTEST:Recipe = {
        id: 0,
        idUser: 0,
        test: false,
        ingredient: false,
        commentaire: 'comment',
        name: 'Nom de test',
        description: 'Description test',
        steps: [],
        ingredientsQte: []
    };





  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
 



       
            <p> Détails d'un ingrédient standard de test</p>


            <div>
                <h1>{ingTEST.name}</h1>
                <p>{ingTEST.description}</p>
            </div>
        

   
      </main>
    </div>
  );
}
*/