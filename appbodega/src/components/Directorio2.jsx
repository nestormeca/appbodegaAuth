import React from "react";
import { Link } from "react-router-dom";
import { cargaInputs } from "../form";

const Directorio2 = () => {
  return (
    <div className="container px-4 py-5" id="icon-grid">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5 justify-content-center">
        {cargaInputs.map((label, i) => (
          <Link to={label.id} className="btn btn-success m-1 " key={label.id}>
            {label.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Directorio2;
