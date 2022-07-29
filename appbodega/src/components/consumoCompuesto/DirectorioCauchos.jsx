import { Link } from "react-router-dom";
import { BotonVolver } from "../BotonVolver";

const DirectorioCauchos = () => {
  return (
    <>
      <div className="b-example-divider"></div>

      <div className="container px-4 py-5" id="icon-grid">
        <h2 className="pb-2 border-bottom text-center">Compuestos de Caucho</h2>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
          <div className="col d-flex align-items-start form-label">
            <div>
              <Link
                to={"/directoriocaucho/consumos"}
                className="fw-bold mb-0 text-center"
              >
                Consumos Bodega Consignada y Bailac
              </Link>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div>
              <Link
                to={"/directoriocaucho/recepcion"}
                className="fw-bold mb-0 text-center"
              >
                Recepción de Compuesto
              </Link>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div>
              <Link
                to={"/directoriocaucho/solicitudcaucho"}
                className="fw-bold mb-0 text-center"
              >
                Solicitud de Compuesto Consignado
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DirectorioCauchos;
