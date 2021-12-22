import React from "react";

const FilterComponent = ({ filterText, onFilter, onClear }) => (
    <>

        <div className="d-flex justify-content-between">
            <div className="col-md-11">
                <input
                    id="search"
                    type="text"
                    placeholder="Buscar Cobranza"
                    value={filterText}
                    onChange={onFilter}
                    className="form-control"
                />
            </div>
            <button className="btn btn-sm btn-danger" onClick={onClear}>X</button>

        </div>

    </>
);

export default FilterComponent;
