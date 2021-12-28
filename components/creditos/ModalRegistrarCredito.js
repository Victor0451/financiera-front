import React from 'react'

const ModalRegistrarCliente = ({
    dniRef,
    idClienteRef,
    cuotasRef,
    prestamoRef,
    vendedorRef,
    planCuotas,
    anticipoRef,
    capDevRef,
    cuoPrestRef,
    cliente,
    empleados,
    errores,
    buscarCliente,
    cuoprest,
    capadev,
    calculoPrestamo,
    calcTotalFinal,
    totalFinal,
    registrarCredito,
    info
}) => {

    return (
        <div className="modal fade" id="registrarCredito" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Registrar Cliente</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body alert alert-secondary">
                        <div className=" border border-dark p-4 bgbox">

                            <h4>

                                <u>
                                    Buscar Cliente
                                </u>

                            </h4>

                            <div className="row">

                                <div className="col-md-4 mt-4">
                                    <label>
                                        <u>
                                            N° Cliente
                                        </u>
                                    </label>
                                    <input
                                        className="form-control mt-2"
                                        type="text"
                                        placeholder="N° de Cliente"
                                        ref={idClienteRef}
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
                                        type="text"
                                        placeholder="DNI"
                                        ref={dniRef}
                                    />
                                </div>

                                <div className="col-md-4 mt-4">
                                    <div className="mt-2"></div>
                                    <button className="mt-4 btn btn-primary" onClick={buscarCliente}>Buscar Cliente</button>
                                </div>

                            </div>
                        </div>


                        {
                            cliente.length === 0 ? null
                                : (
                                    <>
                                        <div className="mt-4 border border-dark p-4 bgbox">

                                            <h4>

                                                <u>
                                                    Datos del Cliente
                                                </u>

                                            </h4>

                                            {info ? (
                                                <div className="alert alert-info border border-dark text-center text-uppercasse mt-4 mb-4">
                                                    {info}
                                                </div>
                                            ) : null}

                                            <div className="row">

                                                <div className="col-md-3 mt-4">
                                                    <label>
                                                        <u>
                                                            Apellido
                                                        </u>
                                                    </label>
                                                    <input
                                                        className="form-control mt-2"
                                                        type="text"
                                                        placeholder="Apellido"
                                                        //ref={idClienteRef}
                                                        value={cliente.apellido}
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
                                                        type="text"
                                                        placeholder="Nombre"
                                                        //ref={idClienteRef}
                                                        value={cliente.nombre}
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
                                                        type="text"
                                                        placeholder="DNI"
                                                        //ref={dniRef}
                                                        value={cliente.dni}
                                                    />
                                                </div>

                                                <div className="col-md-3 mt-4">
                                                    <label>
                                                        <u>
                                                            Zona
                                                        </u>
                                                    </label>
                                                    <input
                                                        className="form-control mt-2"
                                                        type="text"
                                                        placeholder="Zona"
                                                        //ref={dniRef}
                                                        value={cliente.idzona}
                                                    />
                                                </div>
                                            </div>
                                        </div>


                                        <div className="mt-4 border border-dark p-4 bgbox">

                                            <h4>

                                                <u>
                                                    Confeccion del Credito
                                                </u>

                                            </h4>

                                            <div className="row mt-4 border border-dark p-3">

                                                <div className="form-group col-md-4 mt-2">
                                                    <label>

                                                        {" "}
                                                        <u> Vendedor: </u>

                                                    </label>
                                                    <select
                                                        className="form-select mt-2"
                                                        name="capital"
                                                        ref={vendedorRef}
                                                    >
                                                        <option selected value="no"> Elige el vendedor..</option>
                                                        {empleados
                                                            ? empleados.map((c, index) => (
                                                                <option key={index} value={c.idempleado}>
                                                                    {c.apellido}, {c.nombre}
                                                                </option>
                                                            ))
                                                            : null}
                                                    </select>
                                                </div>

                                                <div className="col-md-2 mt-2">
                                                    <label>
                                                        <u>
                                                            Prestamo
                                                        </u>
                                                    </label>
                                                    <input
                                                        className="form-control mt-2"
                                                        type="number"
                                                        placeholder="Prestamos"
                                                        ref={prestamoRef}

                                                    />
                                                </div>

                                                <div className="form-group col-md-3 mt-2">
                                                    <label>

                                                        {" "}
                                                        <u> Cuotas: </u>

                                                    </label>
                                                    <select
                                                        className="form-select mt-2"
                                                        name="capital"
                                                        ref={cuotasRef}
                                                    >
                                                        <option selected value="no"> Elige el plan..</option>
                                                        {planCuotas
                                                            ? planCuotas.map((c, index) => (
                                                                <option key={index} value={c.plan_cuotas}>
                                                                    {c.plan_cuotas}
                                                                </option>
                                                            ))
                                                            : null}
                                                    </select>
                                                </div>

                                                <div className="form-group col-md-3 mt-2">
                                                    <div className="mt-2"></div>
                                                    <button className="mt-4 btn btn-primary" onClick={calculoPrestamo}>
                                                        Calcular
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="row mt-4 border border-dark p-3">

                                                <div className="col-md-3 mt-4">
                                                    <label>
                                                        <u>
                                                            Capital a Devolver
                                                        </u>
                                                    </label>
                                                    <input
                                                        className="form-control mt-2"
                                                        type="number"
                                                        placeholder="Prestamos"
                                                        defaultValue={capadev}
                                                        readOnly

                                                    />
                                                </div>

                                                <div className="col-md-3 mt-4">
                                                    <label>
                                                        <u>
                                                            Valor de la Cuotas
                                                        </u>
                                                    </label>
                                                    <input
                                                        className="form-control mt-2"
                                                        type="number"
                                                        placeholder="Prestamos"
                                                        defaultValue={cuoprest}
                                                        ref={cuoPrestRef}


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
                                                        type="number"
                                                        placeholder="Anticipo"
                                                        id="anticipo"
                                                        ref={anticipoRef}
                                                        onChange={calcTotalFinal}
                                                        defaultValue="0"

                                                    />
                                                </div>

                                                <div className="col-md-3 mt-4">
                                                    <label>
                                                        <u>
                                                            Total Final: {totalFinal}
                                                        </u>
                                                    </label>
                                                    <input
                                                        className="form-control mt-2"
                                                        type="number"
                                                        placeholder="Total Final"
                                                        defaultValue="0"
                                                        ref={capDevRef}

                                                    />
                                                </div>
                                            </div>

                                        </div>

                                    </>
                                )
                        }



                        {errores ? (<div className="mt-4 mb-4 alert alert-danger border border-dark text-center text-uppercase" >
                            {errores}
                        </div>)
                            : null}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={registrarCredito}>Registrar</button>
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalRegistrarCliente
