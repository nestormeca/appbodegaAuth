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
          key="enero"
          className="tab-pane fade"
          id={`pills-enero`}
          role="tabpanel"
          aria-labelledby={`#pills-enero`}
          tabIndex="0"
        >
          <Enero />
        </div>
        <div
          key="febrero"
          className="tab-pane fade"
          id={`pills-febrero`}
          role="tabpanel"
          aria-labelledby={`#pills-febrero`}
          tabIndex="0"
        >
          <Febrero />
        </div>
        <div
          key="marzo"
          className="tab-pane fade"
          id={`pills-marzo`}
          role="tabpanel"
          aria-labelledby={`#pills-marzo`}
          tabIndex="0"
        >
          <Marzo />
        </div>
        <div
          key="abril"
          className="tab-pane fade"
          id={`pills-abril`}
          role="tabpanel"
          aria-labelledby={`#pills-abril`}
          tabIndex="0"
        >
          <Abril />
        </div>
        <div
          key="mayo"
          className="tab-pane fade"
          id={`pills-mayo`}
          role="tabpanel"
          aria-labelledby={`#pills-mayo`}
          tabIndex="0"
        >
          <Mayo />
        </div>
        <div
          key="junio"
          className="tab-pane fade"
          id={`pills-junio`}
          role="tabpanel"
          aria-labelledby={`#pills-junio`}
          tabIndex="0"
        >
          <Junio />
        </div>
        <div
          key="julio"
          className="tab-pane fade"
          id={`pills-julio`}
          role="tabpanel"
          aria-labelledby={`#pills-julio`}
          tabIndex="0"
        >
          <Julio />
        </div>
        <div
          key="agosto"
          className="tab-pane fade show active"
          id={`pills-agosto`}
          role="tabpanel"
          aria-labelledby={`#pills-agosto`}
          tabIndex="0"
        >
          <Agosto />
        </div>
        <div
          key="septiembre"
          className="tab-pane fade"
          id={`pills-septiembre`}
          role="tabpanel"
          aria-labelledby={`#pills-septiembre`}
          tabIndex="0"
        >
          <Septiembre />
        </div>
        <div
          key="octubre"
          className="tab-pane fade"
          id={`pills-octubre`}
          role="tabpanel"
          aria-labelledby={`#pills-octubre`}
          tabIndex="0"
        >
          <Octubre />
        </div>
        <div
          key="noviembre"
          className="tab-pane fade"
          id={`pills-noviembre`}
          role="tabpanel"
          aria-labelledby={`#pills-noviembre`}
          tabIndex="0"
        >
          <Noviembre />
        </div>
        <div
          key="diciembre"
          className="tab-pane fade"
          id={`pills-diciembre`}
          role="tabpanel"
          aria-labelledby={`#pills-diciembre`}
          tabIndex="0"
        >
          <Diciembre />
        </div>
      </div>
    </div>
  );
};

export default ConsumoAno;
