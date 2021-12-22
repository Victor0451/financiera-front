import React from 'react'
import ListadoCobranzaCreditos from './ListadoCobranzaCreditos'

const FormCobranzaCreditos = ({
    cliente,
    credito,
    cobranza,
    cuoPag,
    totalCobranza
}) => {
    return (
        <div className='container border border-dark bgbox mt-4'>
            <h4>
                <u>
                    Cobranza
                </u>
            </h4>

            {
                cliente.length === 0 ?
                    (<div className="alert alert-info border border-dark text-center text-uppercase mt-4 mb-4">No hay datos del cliente</div>)
                    : (
                        <>
                            <div className="mt-4 border border-dark p-4 bgbox">

                                <h6>

                                    <u>
                                        Datos del Cliente
                                    </u>

                                </h6>


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
                                            readOnly
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
                                            readOnly
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
                                            readOnly
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
                                            readOnly
                                            //ref={dniRef}
                                            value={cliente.idzona}
                                        />
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

            {credito.idcredito ? (
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
                                value={credito.prestamo}
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
                                value={credito.monto_cuota}
                                readOnly
                            />
                        </div>
                        <div className="col-md-3 mt-4">
                            <label>
                                <u>
                                    Cobrado
                                </u>
                            </label>
                            <input
                                className="form-control mt-2"
                                type="text"
                                value={totalCobranza(cobranza)}
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
                                value={credito.cant_cuota}
                                readOnly
                            />
                        </div>
                        <div className="col-md-3 mt-4">
                            <label>
                                <u>
                                    Cuotas Pagadas
                                </u>
                            </label>
                            <input
                                className="form-control mt-2"
                                type="text"
                                defaultValue={cuoPag}
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
                                value={credito.anticipo}
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
                                value={credito.monto_final}
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
                                value={credito.vendedor}
                                readOnly
                            />
                        </div>
                    </div>
                </div>

            ) : <div className="alert alert-info border border-dark text-center text-uppercase mt-4 mb-4">No hay datos del credito</div>}


            <div className='mt-4'>

                <ListadoCobranzaCreditos
                    listado={cobranza}
                />

            </div>


        </div>
    )
}

export default FormCobranzaCreditos
