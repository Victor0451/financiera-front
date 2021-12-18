import React from 'react'

const Botones = () => {
    return (
        <div className="mt-4 container border border-dark p-4 bgbox">

            <h4 className="mb-4">
                <u>Accesos Directos</u>
            </h4>

            <div className="row">
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Clientes</h5>
                            <p className="card-text">Gestion de altas, bajas y modificaciones de clientes</p>
                            <a href="/clientes/index" className="btn btn-primary">Entrar</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Botones
