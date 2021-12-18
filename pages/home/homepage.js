import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layouts/Layout';
import jsCookie from 'js-cookie'
import Router from 'next/router';
import Novedades from '../../components/Layouts/Novedades';
import Botones from '../../components/Layouts/Botones';

const Homepage = () => {

    const [user, guardarUsuario] = useState(null);

    let token = jsCookie.get("token");

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        } else {
            let usuario = jsCookie.get("usuario");

            if (usuario) {
                let userData = JSON.parse(usuario);
                guardarUsuario(userData);
            }
        }
    }, []);

    return (
        <Layout>

            <Novedades />

            <Botones />

        </Layout>
    )
}

export default Homepage
