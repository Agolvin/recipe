import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Input/NavBar/NavBar";

const Root = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default Root;
