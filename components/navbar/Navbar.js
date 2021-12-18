import React, { useState, useEffect } from "react";
import jsCookies from "js-cookie";
import AuthLinks from "./AuthLinks";
import GuestLinks from "./GuestLinks";

const Navbar = () => {

    const [userData, guardarUsuario] = useState({});

    useEffect(() => {
        let usuario = jsCookies.get("usuario");

        if (usuario) {
            let userData = JSON.parse(usuario);
            guardarUsuario(userData);
        }
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark ">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Financiera</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {userData.id ? <AuthLinks userData={userData} /> : <GuestLinks />}
            </div>
        </nav>
    )
}

export default Navbar
