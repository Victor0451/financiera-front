import React from 'react'
import Spinner from '../Layouts/Spinner'

const ModalVerCliente = ({ row, conyugue, razonSoc }) => {

    if (row.lenght === 0) return <Spinner />

    console.log(razonSoc)

    return (
        <div className="modal fade" id="verCliente" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Cliente: {row.apellido}, {row.nombre} </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body alert alert-secondary">
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
                                            DNI
                                        </u>
                                    </label>
                                    <input
                                        className="form-control mt-2"
                                        defaultValue={row.dni}
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
                                        defaultValue={row.direccion}
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
                                        defaultValue={row.barrio}
                                        readOnly
                                    />
                                </div>

                                <div className="col-md-6 mt-4">
                                    <label>
                                        <u>
                                            Telefono
                                        </u>
                                    </label>
                                    <input
                                        className="form-control mt-2"
                                        defaultValue={row.telefono}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>

                        {conyugue.lenght === 0 ?
                            (<div className="alert alert-info border border-dark text-center text-uppercase">No posee conyugue registrado</div>)
                            : (
                                <div className="mt-4 border border-dark p-4 bgbox">

                                    <h4>
                                        <strong>
                                            <u>
                                                Conyugue
                                            </u>
                                        </strong>
                                    </h4>

                                    <div className="row">


                                        <div className="col-md-4 mt-4">
                                            <label>
                                                <u>
                                                    Apellido
                                                </u>
                                            </label>
                                            <input
                                                className="form-control mt-2"
                                                defaultValue={conyugue.apellido}
                                                readOnly
                                            />
                                        </div>

                                        <div className="col-md-4 mt-4">
                                            <label>
                                                <u>
                                                    Nombre
                                                </u>
                                            </label>
                                            <input
                                                className="form-control mt-2"
                                                defaultValue={conyugue.nombre}
                                                readOnly
                                            />
                                        </div>

                                        <div className="col-md-4 mt-4">
                                            <label>
                                                <u>
                                                    DNI
                                                </u>
                                            </label>
                                            <input
                                                className="form-control mt-2"
                                                defaultValue={conyugue.dni}
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                </div>

                            )}

                        {razonSoc.lenght === 0 ?
                            (<div className="alert alert-info border border-dark text-center text-uppercase">No posee Razon Social registrada</div>)
                            : (

                                <div className="mt-4 border border-dark p-4 bgbox">

                                    <h4>
                                        <strong>
                                            <u>
                                                Razon Social
                                            </u>
                                        </strong>
                                    </h4>

                                    <div className="row">


                                        <div className="col-md-6 mt-4">
                                            <label>
                                                <u>
                                                    Descripcion
                                                </u>
                                            </label>
                                            <input
                                                className="form-control mt-2"
                                                defaultValue={razonSoc.razon_social}
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
                                                defaultValue={razonSoc.direccion_legal}
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
                                                defaultValue={razonSoc.barrio_legal}
                                                readOnly
                                            />
                                        </div>

                                        <div className="col-md-6 mt-4">
                                            <label>
                                                <u>
                                                    Telefono
                                                </u>
                                            </label>
                                            <input
                                                className="form-control mt-2"
                                                defaultValue={razonSoc.tel_legal}
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalVerCliente
