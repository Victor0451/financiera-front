import React from 'react'
import ListadoCreditos from '../../components/creditos/ListadoCreditos'
import { push } from '../../utils/funciones'


const ModalVerCliente = ({ row, conyugue, razonSoc, creditos }) => {

    console.log(creditos)

    return (
        <div className="modal fade" id="verCliente" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel"><u> <strong>Datos del Cliente</strong></u>: {row.apellido}, {row.nombre} </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body alert alert-secondary">

                        {
                            row.idcliente ? (
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
                                                value={row.dni}
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
                                                value={row.direccion}
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
                                                value={row.barrio}
                                                readOnly
                                            />
                                        </div>

                                        <div className="col-md-6 mt-4">
                                            <label>
                                                <u>
                                                    Localidad
                                                </u>
                                            </label>
                                            <input
                                                className="form-control mt-2"
                                                value={row.localidad}
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
                                                value={row.telefono}
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="alert alert-info border border-dark text-center text-uppercase mt-4 mb-4">No hay datos del cliente</div>
                            )
                        }


                        {!conyugue.idcliente ?
                            (<div className="alert alert-info border border-dark text-center text-uppercase mt-4 mb-4">No hay datos del conyugue</div>)
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
                                                value={conyugue.apellido}
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
                                                value={conyugue.nombre}
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
                                                value={conyugue.dni}
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                </div>

                            )}

                        {!razonSoc.idcliente ?
                            (<div className="alert alert-info border border-dark text-center text-uppercase mt-4 mb-4">No hay datos de la razon social</div>)
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
                                                value={razonSoc.razon_social}
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
                                                value={razonSoc.direccion_legal}
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
                                                value={razonSoc.barrio_legal}
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
                                                value={razonSoc.tel_legal}
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}



                        {creditos.length === 0 ?
                            (<div className="alert alert-info border border-dark text-center text-uppercase mt-4 mb-4">No posee creditos activos</div>)
                            : (
                                <div className="mt-4 border border-dark p-4 bgbox">

                                    <h4>
                                        <strong>
                                            <u>
                                                Creditos Activos
                                            </u>
                                        </strong>
                                    </h4>


                                    <ListadoCreditos
                                        listado={creditos}
                                        push={push}
                                        flag={true}
                                    />

                                </div>
                            )}



                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ModalVerCliente
