import React from 'react'
import Spinner from '../Layouts/Spinner'

const ModalRegistrarCliente = ({
    apellidoRef,
    nombreRef,
    dniRef,
    direccionRef,
    barrioRef,
    telefonoRef,
    fechaNacRef,
    codigoPostalRef,
    zonaRef,
    apellidoConRef,
    nombreConRef,
    dniConRef,
    descripcionRSRef,
    direccionRSRef,
    barrioRSRef,
    telefonoRSRef,
    localidadRef,
    zonas,
    registroCliente,
    errores
}) => {


    return (
        <div className="modal fade" id="registrarCliente" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Registrar Cliente</h5>
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

                                <div className="col-md-4 mt-4">
                                    <label>
                                        <u>
                                            Apellido
                                        </u>
                                    </label>
                                    <input
                                        className="form-control mt-2"
                                        type="text"
                                        placeholder="Apellido"
                                        ref={apellidoRef}
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
                                        type="text"
                                        placeholder="Nombre"
                                        ref={nombreRef}

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
                                        type="number"
                                        placeholder="DNI"
                                        ref={dniRef}

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
                                        type="text"
                                        placeholder="Direccion"
                                        ref={direccionRef}

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
                                        type="text"
                                        placeholder="Barrio"
                                        ref={barrioRef}

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
                                        type="text"
                                        placeholder="Localidad"
                                        ref={localidadRef}

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
                                        type="text"
                                        placeholder="Telefono"
                                        ref={telefonoRef}
                                    />
                                </div>

                                <div className="col-md-6 mt-4">
                                    <label>
                                        <u>
                                            Fecha Nacimiento
                                        </u>
                                    </label>
                                    <input
                                        className="form-control mt-2"
                                        type="date"
                                        ref={fechaNacRef}
                                    />
                                </div>

                                <div className="col-md-6 mt-4">
                                    <label>
                                        <u>
                                            Codigo Postal
                                        </u>
                                    </label>
                                    <input
                                        className="form-control mt-2"
                                        type="text"
                                        ref={codigoPostalRef}
                                    />
                                </div>

                                <div className="form-group col-md-6 mt-4">
                                    <label>
                                        <strong>
                                            {" "}
                                            <u> Zona: </u>
                                        </strong>
                                    </label>
                                    <select
                                        className="form-select mt-2"
                                        name="operador"
                                        ref={zonaRef}
                                    >
                                        <option selected value="no"> Elige una Zona </option>
                                        {zonas
                                            ? zonas.map((z, index) => (
                                                <option key={index} value={z.idzona}>
                                                    {z.descripcion}
                                                </option>
                                            ))
                                            : null}
                                    </select>
                                </div>
                            </div>
                        </div>




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
                                        type="text"
                                        placeholder="Apellido"
                                        ref={apellidoConRef}

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
                                        type="text"
                                        placeholder="Nombre"
                                        ref={nombreConRef}

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
                                        type="number"
                                        placeholder="DNI"
                                        ref={dniConRef}

                                    />
                                </div>
                            </div>
                        </div>

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
                                        type="text"
                                        placeholder="Descripcion"
                                        ref={descripcionRSRef}
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
                                        type="text"
                                        placeholder="Direccion"
                                        ref={direccionRSRef}

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
                                        type="text"
                                        placeholder="Barrio"
                                        ref={barrioRSRef}

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
                                        type="text"
                                        placeholder="Telefono"
                                        ref={telefonoRSRef}

                                    />
                                </div>
                            </div>
                        </div>
                        {errores ? (<div className="mt-4 mb-4 alert alert-danger border border-dark text-center text-uppercase" >
                            {errores}
                        </div>)
                            : null}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={registroCliente}>Registrar</button>
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalRegistrarCliente
