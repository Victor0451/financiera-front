import React from "react";
import jsCookies from "js-cookie";

const Logout = () => {
    const logout = () => {
        jsCookies.remove("token");
        jsCookies.remove("usuario");
    };
    return (
        <a className="nav-link" onClick={logout} href="/">Cerrar Session</a>
    );
};

export default Logout;