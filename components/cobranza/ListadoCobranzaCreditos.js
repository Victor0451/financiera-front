import React, { useMemo } from "react";
import toastr from "toastr";
import DataTable from "react-data-table-component";
import FilterComponent from "./FilterComponent";


const ListadoCobranzaCreditos = ({
    listado,
    verCliente,
    eliminarCliente
}) => {

    const columns = [

        {
            name: "Cuota",
            selector: "cuota",
            sortable: true,
            grow: 0.4
        },
        {
            name: "Monto",
            selector: "monto",
            sortable: true,
            grow: 0.4
        },

        {
            name: "Fecha de Pago",
            selector: "fecha",
            sortable: true,
            grow: 0.5
        },

        {
            name: "Metodo de Pago",
            selector: "metodo_pago",
            sortable: true,
            grow: 0.8
        },

        {
            name: "Descripcion",
            selector: "descripcion",
            sortable: true,
            grow: 0.4
        },
        // {
        //     name: "acciones",
        //     button: true,
        //     cell: row =>
        //     (
        //         <>
        //             <button
        //                 onClick={() => verCliente(row)}
        //                 className="btn btn-sm btn-info me-1"
        //                 data-bs-toggle="modal"
        //                 data-bs-target="#verCliente"
        //             >
        //                 <i className="fa fa-eye" aria-hidden="true"></i>
        //             </button>
        //             <button
        //                 onClick={() => toastr.warning("Modulo en proceso de programacion", "ATENCION")}
        //                 className="btn btn-sm btn-warning me-1"
        //             >
        //                 <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
        //             </button>
        //             <button
        //                 className="btn btn-sm btn-danger me-1"
        //                 onClick={() => eliminarCliente(row)}>
        //                 <i className="fa fa-trash-o" aria-hidden="true"></i>
        //             </button>
        //         </>

        //     )
        // }
    ];

    const [filterText, setFilterText] = React.useState("");
    const [resetPaginationToggle, setResetPaginationToggle] = React.useState(
        false
    );

    const filteredItems = listado.filter(
        item =>
            JSON.stringify(item)
                .toLowerCase()
                .indexOf(filterText.toLowerCase()) !== -1
    );

    const subHeaderComponent = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText("");
            }
        };

        return (
            <FilterComponent
                onFilter={e => setFilterText(e.target.value)}
                onClear={handleClear}
                filterText={filterText}
            />
        );
    }, [filterText, resetPaginationToggle]);

    return (
        <div className="mt-4 mb-4 container border border-dark bgbox p-4">
            <div className="row">
                <div className="col-md-10">


                    <h3>
                        <u>
                            Listado de Cobranza
                        </u>
                    </h3>

                </div>

                <div className="col-md-2">
                    <button className="btn btn-primary btn-sm text-white"
                        data-bs-toggle="modal"
                        data-bs-target="#registrarCobranza"
                    >Registrar Pago</button>
                </div>
            </div>


            <DataTable
                // title="Listado de Clientes"
                columns={columns}
                data={filteredItems}
                defaultSortField="name"
                striped
                pagination
                subHeader
                subHeaderComponent={subHeaderComponent}
            />
        </div>
    );
}

export default ListadoCobranzaCreditos


