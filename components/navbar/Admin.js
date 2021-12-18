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

            </ul>
            <span className="navbar-text">
                <Logout />
            </span>
        </div>

    )
}

export default Admin
