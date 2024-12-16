


function AccueilPage() {
    
  

   
    return (
      <>


 


<h1>Updates planifiées</h1>
Les dates et fonctionnalités présentées ci-dessous sont purement spéculative. <br />
Cela n'engage en RIEN le dévelopeur <br />

<br/>
<br/>
<h2>V0.1</h2>
Closed Alpha <br />
Janvier 2025 (samedi 25/1/2025?) <br />
<h3>Ingrédients</h3>
Liste ok<br/>
Détail ok incomplet (nom, description)<br/>
Ajout ok incomplet<br/>
Modification ok incomplet<br/>
<h3>Recettes</h3>
<h3>Autres</h3>
hébergement API + Site React<br/>
mode local pour test? <br />
branche de test avec VSCode? <br />



<br/>
<br/>
<h2>V0.2</h2>
Février 2025
<h3>Ingrédients</h3>
Ajout sélection unité <br />
Ajout coût/prix ingrédient <br />
<h3>Recettes</h3>
<h3>Autres</h3>
gestion de branches pour dev/preprod/prod(s) <br />
Unité de mesure(g/kg/L/Unité)<br/>


<br/>
<br/>
<h2>V0.3</h2>
Closed Beta <br />
Mars 2025
<h3>Ingrédients</h3>
<h3>Recettes</h3>
Liste<br/>
Détails (titre,descrition,étapes)<br/>
Ajout<br/>
<h3>Autres</h3>

<br/>
<br/>
<h2>V0.4</h2>
Avril 2025
<h3>Ingrédients</h3>
Page de selection pour ajout <br />
<h3>Recettes</h3>
Ajout liste ingrédients avec quantité (qté modifiable dans la recette)<br/>
bouton de suppression ingredient d'une recette <br />
Méthode de calcul du coût en ingrédients<br/> 
Duplication de recettes <br />
<h3>Autres</h3>

<br/>
<br/>
<h2>V0.5</h2>
Mai 2025
<h3>Ingrédients</h3>
Ajout de filtres pour la sélection d'ingrédients (nom, autres?) <br />
<h3>Recettes</h3>
ajout coche pour utiliser une recette comme ingrédient d'une autre <br />
<h3>Autres</h3>

<br/>
<br/>
<h2>V0.6</h2>
Juin 2025
<h3>Ingrédients</h3>
<h3>Recettes</h3>
Export pdf/word des recettes pour impressions <br />
impression d'une recette: inclure optionnellement  impression des sous recette <br />
<h3>Autres</h3>

<br/>
<br/>
<h2>V0.7</h2>
Juillet 2025
<h3>Ingrédients</h3>
<h3>Recettes</h3>
<h3>Autres</h3>
Refonte graphique parceque oui pour l'instant c'est moche <br />

<br/>
<br/>
<h2>V0.8</h2>
<h3>Ingrédients</h3>
<h3>Recettes</h3>
<h3>Autres</h3>

<br/>
<br/>
<h2>V0.9</h2>
<h3>Ingrédients</h3>
<h3>Recettes</h3>
<h3>Autres</h3>

<br/>
<br/>
<h2>V1.0</h2>
Mise en prod! <br />
étét 2025? <br />
<h3>Ingrédients</h3>
full privé <br />
<h3>Recettes</h3>
choix public/privé <br />
systeme de partage? <br />
<h3>Autres</h3>
ajout de compte <br />
gestion mail/mdp <br />
sécuriser API par tockens <br />


<br/>
<br/>
<h2>V2.0</h2>
mySQL update <br />
Dans longtemps <br />
<h3>Ingrédients</h3>
<h3>Recettes</h3>
<h3>Autres</h3>
Migration BDD JSON vers MySQL? <br />


<br/>
<br/>
<h2>V3.0</h2>
Suivi recette <br />
<h3>Ingrédients</h3>
cochage des ingrédient pesés <br />
<h3>Recettes</h3>
suivi interactif de réalisation <br />
<h3>Autres</h3>


<br/>
<br/>
<h2>V4.0</h2>
Android update <br />
<h3>Ingrédients</h3>
<h3>Recettes</h3>
<h3>Autres</h3>





<br/>
<br/>
<br/>
<br/>
<h1>idées et questions en vrac</h1>
ajouter indication de temps de travail dans les étapes/recettes?<br/>
autoriser un unique niveau de sous recette? plusieurs? <br />
comment situer les sous recette dans une recette principale? dans des étapes spécifiques? <br />
Trouver un nom au site? <br />
Version mobile android? (tablette?) (V4)<br />
Systeme de suivi de réalisation pour cocher ce qui est fait au fur et à mesure? (V3)<br />
<br/>
<br/>
<br/>
<br/>
<br/>



<h1>Fonctionnalitées</h1>
virer cette table de merde??
<table>
  <thead>
    <tr>
      <th scope="col">Type</th>
      <th scope="col">Détail</th>
      <th scope="col">Etat</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>

  <tr>
      <th scope="row">Ingrédients</th>
      <td>Liste</td>
      <td>BUG</td>
      <td>**</td>
    </tr>
    <tr>
      <th scope="row">Ingrédients</th>
      <td>Ajout</td>
      <td>Inexistant</td>
      <td>**</td>
    </tr>
    <tr>
      <th scope="row">Ingrédients</th>
      <td>Delete</td>
      <td>/!\ A definir</td>
      <td>**</td>
    </tr>


  <tr>
      <th scope="row">Recette</th>
      <td>Liste</td>
      <td>En test</td>
      <td>**</td>
    </tr>
    <tr>
      <th scope="row">Recette</th>
      <td>Ajout</td>
      <td>Inexistant</td>
      <td>??</td>
    </tr>
    <tr>
      <th scope="row">Recette</th>
      <td>Modif</td>
      <td>Incomplet, pb de refresh?</td>
      <td>??</td>
    </tr>
    <tr>
      <th scope="row">Recette</th>
      <td>Delete</td>
      <td>BUG, à definir</td>
      <td>??</td>
    </tr>
    <tr>
      <th scope="row">Recette</th>
      <td>Liste etapes</td>
      <td>Incomplet</td>
      <td>??</td>
    </tr>
    <tr>
      <th scope="row">Recette</th>
      <td>Liste ingrédients</td>
      <td>Inexistant</td>
      <td>??</td>
    </tr>


  </tbody>
</table>

      </>
    );
  }
  
  export default AccueilPage;
  