import { useState } from "react";

export const SolicitudDeCompuesto = () => {
  const [selected, setSelected] = useState(0);
  const [caucho, setCaucho] = useState({
    caucho: "",
    cantidad: "",
  });

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  console.log(selected);

  const handleClick = (e) => {
    e.preventDefault();
  };

  console.log(caucho);

  return (
    <div className="container">
      <form>
        <div className="d-flex  flex-column align-items-center">
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Tipo de Caucho:
            </label>
            <select
              className="form-select"
              id="inputGroupSelect01"
              onChange={handleChange}
              defaultValue=""
            >
              <option value="" disabled>
                Selecciona...
              </option>

              <option value="v62">V62 (409607)</option>
              <option value="V63">V63 (409521)</option>
              <option value="V1V63">V1/V63 (400894)</option>
              <option value="V65">V65 (409547)</option>
              <option value="V064">V064 (450287)</option>
              <option value="V066">V066 (450289)</option>
              <option value="V057">V057 (451004)</option>
              <option value="PR2">PR2 (409829)</option>
            </select>

            <span className="input-group-text" id="basic-addon1">
              Cantidad:
            </span>
            <input
              type="number"
              className="form-control"
              placeholder="Cantidad"
              aria-label="cantidad"
              aria-describedby="basic-addon1"
              value={caucho.cantidad}
            />
            <button
              className="btn btn-success"
              type="submit"
              onClick={handleClick}
            >
              Agregar
            </button>
          </div>
        </div>
        <div className="">Solicitudes Realizadas:</div>
      </form>
    </div>
  );
};
