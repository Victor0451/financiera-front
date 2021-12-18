import React, { useMemo } from "react";
import toastr from "toastr";
import DataTable from "react-data-table-component";
import FilterComponent from "./FilterComponent";


const ListadoClientes = ({
    listado,
    verCliente,
    eliminarCliente
}) => {

    const columns = [

        {
            name: "N° Cliente",
            selector: "idcliente",
            sortable: true,
            grow: 0.4
        },

        {
            name: "Apellido",
            selector: "apellido",
            sortable: true,
            grow: 0.5
        },

        {
            name: "Nombre",
            selector: "nombre",
            sortable: true,
            grow: 0.8
        },

        {
            name: "DNI",
            selector: "dni",
            sortable: true,
            grow: 0.4
        },

        {
            name: "Telefono",
            selector: "telefono",
            sortable: true,

        },
        {
            name: "acciones",
            button: true,
            cell: row =>
            (
                <>
                    <button
                        onClick={() => verCliente(row)}
                        className="btn btn-sm btn-info"
                        data-bs-toggle="modal"
                        data-bs-target="#verCliente"
                    >
                        <i className="fa fa-eye" aria-hidden="true"></i>
                    </button>
                    <button
                        onClick={() => toastr.warning("Modulo en proceso de programacion", "ATENCION")}
                        className="btn btn-sm btn-warning"
                    >
                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                    </button>
                    <button
                        className="btn btn-sm btn-danger"
                        onClick={() => eliminarCliente(row)}>
                        <i className="fa fa-trash-o" aria-hidden="true"></i>
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
                            Listado de Clientes
                        </u>
                    </h3>

                </div>

                <div className="col-md-2">
                    <button className="btn btn-primary btn-sm text-white"
                        data-bs-toggle="modal"
                        data-bs-target="#registrarCliente"
                    >Registrar Cliente</button>
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

export default ListadoClientes


