import React from "react";
import { Link } from "react-router-dom";
import { cargaInputs } from "../form";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import {  solid,  regular,  brands,} from "@fortawesome/fontawesome-svg-core/import.macro";

const Directorio2 = () => {
  console.log(cargaInputs);

  return (
    <div className="container px-4 py-5" id="icon-grid">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5 justify-content-center">
        {cargaInputs.map((label, i) => (
          <Link to={label.id} className="btn btn-success m-1 " key={label.id}>
            {label.label}
            <div className="">
              <i className="fa-solid fa-anchor"></i>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Directorio2;
