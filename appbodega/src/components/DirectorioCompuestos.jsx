import { Link } from "react-router-dom";

import { directorioCompuestos } from "../form";

import Convertir from "./consumoCompuesto/Convertir";
import ConsumoAno from "./consumoCompuesto/compuestos/ConsumoAno";
import TablaConsumoMes from "./TablaConsumoMes";

const DirectorioCompuestos = () => {
  return (
    <div className="container px-4 py-5" id="icon-grid">
      <div>
        <Convertir />
      </div>
      <ConsumoAno />

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5 justify-content-center">
        {directorioCompuestos.map((label, i) => (
          <Link to={label.id} className="btn btn-primary m-1 " key={label.id}>
            {label.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DirectorioCompuestos;
