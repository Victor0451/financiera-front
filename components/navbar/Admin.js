import React from 'react'
import Logout from './Logout'

const Admin = () => {
    return (

        <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/home/homepage">Home</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="/clientes/clientes">Clientes</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="/creditos/creditos">Creditos</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Administracion                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li className="dropdown-submenu">
                            <a
                                href="#"
                                role="button"
                                data-toggle="dropdown"
                                className="  dropdown-toggle dropdown-item text-dark"
                            >
                                Usuarios
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a href="/auth/registro" className="dropdown-item text-dark">
                                        Registrar Usuario
                                    </a>
                                </li>
                                <hr />
                                <li>
                                    <a href="/auth/editar" className="dropdown-item text-dark">
                                        Modificacion de Usuario
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <hr />
                        <li className="dropdown-submenu">
                            <a
                                href="#"
                                role="button"
                                data-toggle="dropdown"
                                className="  dropdown-toggle dropdown-item text-dark"
                            >
                                Noticias
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a href="/noticias/nueva" className="dropdown-item text-dark">
                                        Ingresar Noticia
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            <span className="navbar-text">
                <Logout />
            </span>
        </div>

    )
}

export default Admin
