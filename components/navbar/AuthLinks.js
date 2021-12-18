import React from "react";
import Admin from "./Admin";


const AuthLinks = ({ userData }) => {
  return (
    <>
      {userData.perfil === 1 ? (
        <Admin />
      ) : null}

      <span className="badge bg-secondary text-uppercase">
        Bienvenido {userData.usuario}
      </span>
    </>
  );
};

export default AuthLinks;