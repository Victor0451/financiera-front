import React from 'react'
import moment from 'moment'

const ModalRegistrarCobranza = ({
    errores,
    credito,
    cuoPag,
    preCargarCobranza,
    nupagos,
    montoRef,
    cuotaRef,
    metodoCobranzaRef,
    descripcionRef,
    limpiarPrePagos,
    eliminarPagoPrecargado,
    totalPagosPrecargados,
    registrarPagosCredito,
    totalCobranza,
    cobranza
}) => {


    return (
        <div className="modal fade" id="registrarCobranza" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Registrar Cobranza</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body alert alert-secondary">

                        <div className='border border-dark p-4 bgbox'>
                            <div className="row">

                                <div className="col-md-3 mt-4">
                                    <label>
                                        <u>
                                            Credito
                                        </u>
                                    </label>
                                    <input
                                        className="form-control mt-2"
                                        type="text"
                                        value={credito.monto_final}
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
                                            Monto de la cuota
                                        </u>
                                    </label>
                                    <input
                                        className="form-control mt-2"
                                        type="text"
                                        value={credito.monto_cuota}
                                        readOnly
                                    />
                                </div>
                                <div className="col-md-3 mt-4">
                                    <label>
                                        <u>
                                            Plan de cuotas
                                        </u>
                                    </label>
                                    <input
                                        className="form-control mt-2"
                                        type="text"
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
                                        value={cuoPag}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>


                        <div className='mt-4 border border-dark p-4 bgbox'>

                            <h5>
                                <u>
                                    Registro del Pago
                                </u>
                            </h5>

                            <div className="row">

                                <div className='row col-md-6 '>
                                    <div className="col-md-6 mt-4">
                                        <label>
                                            <u>
                                                Fecha
                                            </u>
                                        </label>
                                        <input
                                            className="form-control mt-2"
                                            type="text"
                                            value={moment().format('DD/MM/YYYY HH:mm:ss')}

                                        />
                                    </div>

                                    <div className="col-md-4 mt-4">
                                        <label>
                                            <u>
                                                Monto
                                            </u>
                                        </label>
                                        <input
                                            className="form-control mt-2"
                                            type="number"
                                            placeholder="Monto"
                                            ref={montoRef}
                                        />
                                    </div>

                                    <div className="col-md-4 mt-4">
                                        <label>
                                            <u>
                                                Cuotas
                                            </u>
                                        </label>
                                        <input
                                            className="form-control mt-2"
                                            type="number"
                                            placeholder="Cuotas"
                                            ref={cuotaRef}
                                        />
                                    </div>

                                    <div className="form-group col-md-6 mt-4">
                                        <label>
                                            {" "}
                                            <u> Tipo Pago: </u>

                                        </label>
                                        <select
                                            className="form-select mt-2"
                                            ref={metodoCobranzaRef}
                                        >
                                            <option selected value="no"> Elige una opcion.. </option>
                                            <option selected value="Efectivo"> Efectivo </option>
                                            <option selected value="Debito"> Debito </option>
                                            <option selected value="Credito"> Credito </option>
                                        </select>
                                    </div>
                                    <div className="col-md-12 mt-4">
                                        <label>
                                            <u>
                                                Descripcion
                                            </u>
                                        </label>
                                        <textarea
                                            className="form-control mt-2"
                                            rows="3"
                                            placeholder="Descripcion"
                                            ref={descripcionRef}
                                        />
                                    </div>
                                    <div className='col-md-12 mt-4'>
                                        <button className='btn btn-primary me-2' onClick={preCargarCobranza}>
                                            Precargar Pago
                                        </button>
                                        <button className='btn btn-danger me-2' onClick={limpiarPrePagos}>
                                            Cancelar
                                        </button>
                                    </div>

                                </div>





                                <div className='col-md-6 border border-dark p-2 prepagos'>
                                    <div className="table-responsive border border-dark">
                                        <table className="table">
                                            <thead className='table-dark'>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Cuota</th>
                                                    <th scope="col">Importe</th>
                                                    <th scope="col">Eliminar</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {
                                                    nupagos.map((n, index) => (
                                                        <tr key={index}>
                                                            <th scope="row">{index + 1}</th>
                                                            <td>{n.cuota}</td>
                                                            <td>{n.monto}</td>
                                                            <td><button className='btn btn-danger btn-sm' onClick={eliminarPagoPrecargado} >
                                                                <i className="fa fa-trash" aria-hidden="true"></i>
                                                            </button></td>
                                                        </tr>
                                                    )
                                                    )
                                                }


                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mt-4 alert alert-info border border-dark text-center text-uppercase">
                                        Total a Pagar: $ {totalPagosPrecargados(nupagos)}
                                    </div>
                                </div>
                            </div>
                        </div>


                        {errores ? (<div className="mt-4 mb-4 alert alert-danger border border-dark text-center text-uppercase" >
                            {errores}
                        </div>)
                            : null}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={registrarPagosCredito} >Registrar</button>
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ModalRegistrarCobranza
