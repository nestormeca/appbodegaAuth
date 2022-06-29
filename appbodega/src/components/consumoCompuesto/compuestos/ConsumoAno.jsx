import { Link } from "react-router-dom";
import { mesAno } from "../../../form";
import TablaConsumoMes from "../../TablaConsumoMes";

const ConsumoAno = () => {
  return (
    <>
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        {mesAno.map((label) => (
          <li className="nav-item" role="presentation" key={label.id}>
            <Link
              key={label.id}
              to={label.id}
              className="nav-link"
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
        {mesAno.map((label) => (
          <div
            key={label.id}
            className="tab-pane fade"
            id={`pills-${label.id}`}
            role="tabpanel"
            aria-labelledby={`#pills-${label.id}`}
            tabIndex="0"
          >
            <TablaConsumoMes />
          </div>
        ))}
      </div>
    </>
  );
};

export default ConsumoAno;
