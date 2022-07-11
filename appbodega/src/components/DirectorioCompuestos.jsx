import { Link } from "react-router-dom";

import { directorioCompuestos } from "../form";
import ConsumoAno from "./consumoCompuesto/compuestos/ConsumoAno";
import Convertir from "./consumoCompuesto/Convertir";
import ResumenDeStock from "./consumoCompuesto/ResumenDeStock";

const DirectorioCompuestos = () => {
  return (
    <div
      className="container d-flex flex-md-column justify-content-center"
      id="icon-grid"
    >
      <h2 className="text-center">Consumo del Año </h2>
      <div className="d-flex justify-content-center pb-2 ">
        <ConsumoAno />
      </div>

      <div className="row-cols-auto">
        <Convertir />
      </div>
      <div className="row-cols-auto">
        <ResumenDeStock />
      </div>
    </div>
  );
};

export default DirectorioCompuestos;
