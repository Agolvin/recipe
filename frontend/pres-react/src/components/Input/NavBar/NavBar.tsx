import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = ({ ...props }) => {
  return (
    <header className="fixed top-0 left-0 border-b w-full h-24">
      <ul className="flex justify-evenly items-center h-full">
        <li>
          <Link to="/accueil">Accueil</Link>
        </li>
        <li>
          <Link to="/recettes">Liste recettes</Link>
        </li>
        <li>
          <Link to="/ingredients">Liste ingredients</Link>
        </li>
        <li>
          <Link to="/2">page 2</Link>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
