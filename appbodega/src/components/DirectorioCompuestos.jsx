import { Link } from "react-router-dom";

import { directorioCompuestos } from "../form";
import ConsumoAno from "./consumoCompuesto/compuestos/ConsumoAno";
import Convertir from "./consumoCompuesto/Convertir";

const DirectorioCompuestos = () => {
  return (
    <div
      className="container px-4 py-5 d-flex flex-md-column justify-content-center"
      id="icon-grid"
    >
      <div className="d-flex justify-content-center pb-5 ">
        <Convertir />
      </div>
      <div className="d-flex justify-content-center pb-5 ">
        <ConsumoAno />
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5 justify-content-center">
        {directorioCompuestos.map((label) => (
          <Link to={label.id} className="btn btn-primary m-1 " key={label.id}>
            {label.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DirectorioCompuestos;
