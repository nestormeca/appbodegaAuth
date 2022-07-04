import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  query,
  where,
  doc,
  deleteDoc,
  addDoc,
  orderBy,
} from "firebase/firestore";
import { db } from "../../firebase";
import { mesAno } from "../../form";

export default function TablaStockconBotonesEliminar({
  codigoCaucho,
  nombre,
  descripcion,
  uso,
  dureza,
  mezcla,
}) {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(0);
  const [quienConsumio, setquienConsumio] = useState(0);

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const handleChangeQuienConsumio = (event) => {
    setquienConsumio(event.target.value);
  };

  const consulta = collection(db, "cauchoConsignado");

  const q = query(
    consulta,
    where("Codigo", "==", codigoCaucho),
    orderBy("Serie", "desc")
  );

  const getMonth2 = () => {
    let date = new Date();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    if (month < 10) {
      return `0${1 + month}-${year}`;
    } else {
      return `${1 + month}-${year}`;
    }
  };

  const getDate = () => {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    if (month < 10) {
      return `${day}-0${month}-${year}`;
    } else {
      return `${day}-${month}-${year}`;
    }
  };

  const consumidos = collection(db, "cauchoConsumido");

  const fechaCosumido = () => {
    let id = new Date();
    let milli = id.getTime();
    return milli;
  };

  const pasarConsumido = async (a, b) => {
    await addDoc(consumidos, {
      fecha: fechaCosumido(),
      periodoInventario: selected,
      quienConsumio: quienConsumio,
      ...a,
    });
  };

  useEffect(() => {
    const unsub = onSnapshot(
      q,
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsub();
    };
  }, []);

  const kilos = data.map((mov) => {
    return mov.Kilos;
  });

  const totalKilos = kilos.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  const deleteData = async (pallet) => {
    try {
      //setLoading((prev) => ({ ...prev, [nanoid]: true }));
      const docRef = doc(db, "cauchoConsignado", `${pallet}`);
      await deleteDoc(docRef);
      //setData(data.filter((doc) => doc.pallet !== pallet));
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickDelete = async (pallet) => {
    console.log("click delete");
    await deleteData(pallet);
  };

  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-2 ">
          <b>Codigo Bailac:</b>
          {nombre} <br />
          <b>Codigo Vipal:</b>
          {codigoCaucho} <br />
          <b>Descripcion:</b> {descripcion} <br />
          <b>Uso:</b>
          {uso} <br />
          <b>Dureza:</b>
          {dureza} <br />
          <b>Codigo Mezcla:</b>
          {mezcla} <br />
        </div>
        <div className="col-2">
          <h1>Stock: {totalKilos}</h1>
        </div>
        <div className="col-8">
          <div style={{ height: "100%", width: "100%" }}>
            <table className="table table-sm">
              <thead>
                <tr style={{ width: "7%", height: "10px" }}>
                  <th className="w-25" scope="col">
                    Kilos
                  </th>
                  <th className="w-0" scope="col">
                    Serie
                  </th>
                  <th className="w-0" scope="col">
                    Lote
                  </th>
                  <th className="w-0" scope="col">
                    Caducidad
                  </th>
                  <th className="w-0" scope="col">
                    Solicitud
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((d) => (
                  <tr key={d.id}>
                    <th>
                      {d.Kilos}
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        ❌
                      </button>
                    </th>
                    <th>{d.Serie}</th>
                    <th>{d.Lote}</th>
                    <th>{d.Caducidad}</th>
                    <th>{d.Solicitud}</th>
                    <th>
                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title text-center"
                                id="exampleModalLabel"
                              >
                                Serie: {d.Serie}
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <div className="input-group mb-3">
                                <span
                                  className="input-group-text"
                                  id="basic-addon1"
                                >
                                  Serie
                                </span>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder={d.Serie}
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                  disabled
                                />
                              </div>
                              <div className="input-group mb-3">
                                <span
                                  className="input-group-text"
                                  id="basic-addon1"
                                >
                                  Kilos
                                </span>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder={d.Kilos}
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                  disabled
                                />
                              </div>
                              <div className="input-group mb-3">
                                <span
                                  className="input-group-text"
                                  id="basic-addon1"
                                >
                                  Lote
                                </span>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder={d.Lote}
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                  disabled
                                />
                              </div>
                              <div className="input-group mb-3">
                                <span
                                  className="input-group-text"
                                  id="basic-addon1"
                                >
                                  Vecimiento
                                </span>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder={d.Caducidad}
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                  disabled
                                />
                              </div>
                              <div className="input-group mb-3">
                                <span
                                  className="input-group-text"
                                  id="basic-addon1"
                                >
                                  Solicitud
                                </span>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder={d.Solicitud}
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                  disabled
                                />
                              </div>
                              <div className="input-group mb-3">
                                <span
                                  className="input-group-text"
                                  id="basic-addon1"
                                >
                                  Fecha de Consumo
                                </span>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder={getDate()}
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                  disabled
                                />
                              </div>

                              <div className="input-group mb-3">
                                <label
                                  className="input-group-text"
                                  htmlFor="inputGroupSelect01"
                                >
                                  Periodo de Inventario
                                </label>
                                <select
                                  className="form-select"
                                  id="inputGroupSelect01"
                                  onChange={handleChange}
                                  defaultValue=""
                                >
                                  <option value="" disabled>
                                    Selecciona Mes...
                                  </option>

                                  {mesAno.map((meses, i) => (
                                    <option value={meses.id} key={i}>
                                      {meses.label}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              <div className="input-group mb-3">
                                <label
                                  className="input-group-text"
                                  htmlFor="inputGroupSelect01"
                                >
                                  Quien Consume:
                                </label>
                                <select
                                  className="form-select"
                                  id="inputGroupSelect01"
                                  onChange={handleChangeQuienConsumio}
                                  defaultValue=""
                                >
                                  <option value="" disabled>
                                    Selecciona...
                                  </option>

                                  <option value="Colina">Planta Colina</option>
                                  <option value="Tierra Amarilla">
                                    Planta Tierra Amarilla
                                  </option>
                                  <option value="vipal">Vipal</option>
                                </select>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Cancelar
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => {
                                  pasarConsumido(d);
                                  handleClickDelete(d.id);
                                }}
                                data-bs-dismiss="modal"
                              >
                                Pasar a Consumido
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* <button onClick={getMaleUsers}>pedir</button> */}
        </div>
      </div>

      <hr />
    </div>
  );
}
