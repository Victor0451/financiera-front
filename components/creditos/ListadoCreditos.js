import React, { useMemo } from "react";
import toastr from "toastr";
import DataTable from "react-data-table-component";
import FilterComponent from "./FilterComponent";

const ListadoCreditos = ({
    listado,
    verCredito,
    eliminarCredito,
    push
}) => {


    const columns = [

        {
            name: "N° Cliente",
            selector: "idcliente",
            sortable: true,
            grow: 0.1
        },

        {
            name: "Credito",
            selector: "prestamo",
            sortable: true,
            grow: 0.1
        },
        {
            name: "Anticipo",
            selector: "anticipo",
            sortable: true,
            grow: 0.1
        },
        {
            name: "Monto Final",
            selector: "monto_final",
            sortable: true,
            grow: 0.1
        },

        {
            name: "Cuota",
            selector: "monto_cuota",
            sortable: true,
            grow: 0.1
        },

        {
            name: "Plan de Cuotas",
            selector: "cant_cuota",
            sortable: true,
            grow: 0.1
        },
        {
            name: "Fecha",
            selector: "fecha",
            sortable: true,
            grow: 0.1
        },
        {
            name: "acciones",
            button: true,
            grow: 0.2,
            cell: row =>
            (
                <>
                    <button
                        onClick={() => verCredito(row)}
                        className="btn btn-sm btn-info me-1"
                        data-bs-toggle="modal"
                        data-bs-target="#verCredito"
                    >
                        <i className="fa fa-eye" aria-hidden="true"></i>
                    </button>
                    <button
                        onClick={() => toastr.warning("Modulo en proceso de programacion", "ATENCION")}
                        className="btn btn-sm btn-warning me-1"
                    >
                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                    </button>
                    <button
                        className="btn btn-sm btn-danger me-1"
                        onClick={() => eliminarCredito(row)}>
                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </button>
                    <button
                        className="btn btn-sm btn-primary me-1"
                        onClick={() => push('/cobranza/cobranza', row.idcliente, row.idcredito)}
                    >
                        <i className="fa fa-money" aria-hidden="true"></i>
                    </button>

                </>

            )
        }
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
                            Listado de Creditos
                        </u>
                    </h3>

                </div>

                <div className="col-md-2">
                    <button className="btn btn-primary btn-sm text-white"
                        data-bs-toggle="modal"
                        data-bs-target="#registrarCredito"
                    >Registrar Credito</button>
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
    )
}

export default ListadoCreditos
