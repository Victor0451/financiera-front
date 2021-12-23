import moment from 'moment'
import React from 'react'

const Novedades = ({ noticia }) => {
    return (
        <div className="alert alert-info border border-dark container mt-4" role="alert">
            <h4 className="alert-heading">Novedades</h4>
            <hr />
            <p>
                <i className="fa fa-info-circle" aria-hidden="true"></i>
                {" "}{noticia.noticia}
            </p>
            <hr />
            <p className="mb-0 text-center">{moment(noticia.fecha).format('DD/MM/YYYY')} - {noticia.operador}</p>
        </div>
    )
}

export default Novedades
