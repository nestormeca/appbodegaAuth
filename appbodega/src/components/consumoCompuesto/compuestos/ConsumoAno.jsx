import { Link } from "react-router-dom";
import { mesAno } from "../../../form";
import Enero from "./mesesConsumo/Enero";
import Febrero from "./mesesConsumo/Febrero";
import Marzo from "./mesesConsumo/Marzo";
import Abril from "./mesesConsumo/Abril";
import Mayo from "./mesesConsumo/Mayo";
import Junio from "./mesesConsumo/Junio";
import Julio from "./mesesConsumo/Julio";
import Agosto from "./mesesConsumo/Agosto";
import Septiembre from "./mesesConsumo/Septiembre";
import Octubre from "./mesesConsumo/Octubre";
import Noviembre from "./mesesConsumo/Noviembre";
import Diciembre from "./mesesConsumo/Diciembre";

const ConsumoAno = () => {
  return (
    <>
      <div className="container d-flex flex-column justify-content-center">
        <ul
          className="nav nav-pills mb-3 d-flex justify-content-center"
          id="pills-tab"
          role="tablist"
        >
          {mesAno.map((label) => (
            <li className="nav-item" role="presentation" key={label.id}>
              <Link
                key={label.id}
                to={label.id}
                className={`nav-link ${label.active}`}
                id={label.id}
                data-bs-toggle="pill"
                data-bs-target={`#pills-${label.id}`}
                type="button"
                role="tab"
                aria-controls={`pills-${label.id}`}
                aria-selected="true"
              >
                {label.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="tab-content" id="pills-tabContent">
          <div
            key="Enero"
            className="tab-pane fade"
            id={`pills-Enero`}
            role="tabpanel"
            aria-labelledby={`#pills-Enero`}
            tabIndex="0"
          >
            <Enero />
          </div>
          <div
            key="Febrero"
            className="tab-pane fade"
            id={`pills-Febrero`}
            role="tabpanel"
            aria-labelledby={`#pills-Febrero`}
            tabIndex="0"
          >
            <Febrero />
          </div>
          <div
            key="Marzo"
            className="tab-pane fade"
            id={`pills-Marzo`}
            role="tabpanel"
            aria-labelledby={`#pills-Marzo`}
            tabIndex="0"
          >
            <Marzo />
          </div>
          <div
            key="Abril"
            className="tab-pane fade"
            id={`pills-Abril`}
            role="tabpanel"
            aria-labelledby={`#pills-Abril`}
            tabIndex="0"
          >
            <Abril />
          </div>
          <div
            key="Mayo"
            className="tab-pane fade"
            id={`pills-Mayo`}
            role="tabpanel"
            aria-labelledby={`#pills-Mayo`}
            tabIndex="0"
          >
            <Mayo />
          </div>
          <div
            key="Junio"
            className="tab-pane fade"
            id={`pills-Junio`}
            role="tabpanel"
            aria-labelledby={`#pills-Junio`}
            tabIndex="0"
          >
            <Junio />
          </div>
          <div
            key="Julio"
            className="tab-pane fade show active"
            id={`pills-Julio`}
            role="tabpanel"
            aria-labelledby={`#pills-Julio`}
            tabIndex="0"
          >
            <Julio />
          </div>
          <div
            key="Agosto"
            className="tab-pane fade"
            id={`pills-Agosto`}
            role="tabpanel"
            aria-labelledby={`#pills-Agosto`}
            tabIndex="0"
          >
            <Agosto />
          </div>
          <div
            key="Septiembre"
            className="tab-pane fade"
            id={`pills-Septiembre`}
            role="tabpanel"
            aria-labelledby={`#pills-Septiembre`}
            tabIndex="0"
          >
            <Septiembre />
          </div>
          <div
            key="Octubre"
            className="tab-pane fade"
            id={`pills-Octubre`}
            role="tabpanel"
            aria-labelledby={`#pills-Octubre`}
            tabIndex="0"
          >
            <Octubre />
          </div>
          <div
            key="Noviembre"
            className="tab-pane fade"
            id={`pills-Noviembre`}
            role="tabpanel"
            aria-labelledby={`#pills-Noviembre`}
            tabIndex="0"
          >
            <Noviembre />
          </div>
          <div
            key="Diciembre"
            className="tab-pane fade"
            id={`pills-Diciembre`}
            role="tabpanel"
            aria-labelledby={`#pills-Diciembre`}
            tabIndex="0"
          >
            <Diciembre />
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsumoAno;
