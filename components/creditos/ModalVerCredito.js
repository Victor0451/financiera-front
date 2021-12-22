import React from 'react'

const ModalVerCredito = ({ row, cliente }) => {

    return (
        <div className="modal fade" id="verCredito" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel"><u><strong>Informacion del Credito</strong></u>: {row.idcredito}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body alert alert-secondary">


                        {cliente.idcliente ? (
                            <div className=" border border-dark p-4 bgbox">
                                <h4>
                                    <strong>
                                        <u>
                                            Datos del Cliente
                                        </u>
                                    </strong>
                                </h4>

                                <div className="row">
                                    <div className="col-md-3 mt-4">
                                        <label>
                                            <u>
                                                Apellido
                                            </u>
                                        </label>
                                        <input
                                            className="form-control mt-2"
                                            value={cliente.apellido}
                                            readOnly
                                        />
                                    </div>

                                    <div className="col-md-3 mt-4">
                                        <label>
                                            <u>
                                                Nombre
                                            </u>
                                        </label>
                                        <input
                                            className="form-control mt-2"
                                            value={cliente.nombre}
                                            readOnly
                                        />
                                    </div>

                                    <div className="col-md-3 mt-4">
                                        <label>
                                            <u>
                                                DNI
                                            </u>
                                        </label>
                                        <input
                                            className="form-control mt-2"
                                            value={cliente.dni}
                                            readOnly
                                        />
                                    </div>
                                    <div className="col-md-6 mt-4">
                                        <label>
                                            <u>
                                                Direccion
                                            </u>
                                        </label>
                                        <input
                                            className="form-control mt-2"
                                            value={cliente.direccion}
                                            readOnly
                                        />
                                    </div>
                                    <div className="col-md-6 mt-4">
                                        <label>
                                            <u>
                                                Barrio
                                            </u>
                                        </label>
                                        <input
                                            className="form-control mt-2"
                                            value={cliente.barrio}
                                            readOnly
                                        />
                                    </div>

                                    <div className="col-md-4 mt-4">
                                        <label>
                                            <u>
                                                Telefono
                                            </u>
                                        </label>
                                        <input
                                            className="form-control mt-2"
                                            value={cliente.telefono}
                                            readOnly
                                        />
                                    </div>
                                </div>
                            </div>

                        ) : <div className="alert alert-info border border-dark text-center text-uppercase mt-4 mb-4">No hay datos del cliente</div>}

                        {row.idcredito ? (
                            <div className="mt-4 border border-dark p-4 bgbox">
                                <h4>
                                    <strong>
                                        <u>
                                            Datos del Credito
                                        </u>
                                    </strong>
                                </h4>

                                <div className="row">

                                    <div className="col-md-3 mt-4">
                                        <label>
                                            <u>
                                                Credito
                                            </u>
                                        </label>
                                        <input
                                            className="form-control mt-2"
                                            value={row.prestamo}
                                            readOnly
                                        />
                                    </div>
                                    <div className="col-md-3 mt-4">
                                        <label>
                                            <u>
                                                Valor de la Cuota
                                            </u>
                                        </label>
                                        <input
                                            className="form-control mt-2"
                                            value={row.monto_cuota}
                                            readOnly
                                        />
                                    </div>
                                    <div className="col-md-3 mt-4">
                                        <label>
                                            <u>
                                                Plan de Cuotas
                                            </u>
                                        </label>
                                        <input
                                            className="form-control mt-2"
                                            value={row.cant_cuota}
                                            readOnly
                                        />
                                    </div>
                                    <div className="col-md-3 mt-4">
                                        <label>
                                            <u>
                                                Anticipo
                                            </u>
                                        </label>
                                        <input
                                            className="form-control mt-2"
                                            value={row.anticipo}
                                            readOnly
                                        />
                                    </div>
                                    <div className="col-md-3 mt-4">
                                        <label>
                                            <u>
                                                Monto Final
                                            </u>
                                        </label>
                                        <input
                                            className="form-control mt-2"
                                            value={row.monto_final}
                                            readOnly
                                        />
                                    </div>
                                    <div className="col-md-3 mt-4">
                                        <label>
                                            <u>
                                                Vendedor
                                            </u>
                                        </label>
                                        <input
                                            className="form-control mt-2"
                                            value={row.vendedor}
                                            readOnly
                                        />
                                    </div>
                                </div>
                            </div>

                        ) : <div className="alert alert-info border border-dark text-center text-uppercase mt-4 mb-4">No hay datos del credito</div>}



                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalVerCredito
