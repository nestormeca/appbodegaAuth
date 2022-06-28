import { Link } from "react-router-dom";

import { directorioCompuestos } from "../form";
import { BotonInicioPeriodo } from "./consumoCompuesto/BotonInicioPeriodo";
import Convertir from "./consumoCompuesto/Convertir";
import ConsumoAno from "./consumoCompuesto/compuestos/ConsumoAno";
import TablaConsumoMes from "./TablaConsumoMes";

const DirectorioCompuestos = () => {
  return (
    <div className="container px-4 py-5" id="icon-grid">
      <div>
        <BotonInicioPeriodo />
        <Convertir />
      </div>
      <ConsumoAno />

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5 justify-content-center">
        {directorioCompuestos.map((label, i) => (
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

export default DirectorioCompuestos;
