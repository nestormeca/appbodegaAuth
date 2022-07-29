import {
  collection,
  getDocs,
  query,
  orderBy,
  updateDoc,
  addDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";

import { db } from "../../firebase";

export const CompuestoSolicitado = () => {
  const [datas, setData] = useState([]);
  const [items, setItems] = useState([]);
  const [solicitud, setSolicitud] = useState([]);
  const [numSolicitud, setNumSolicitud] = useState([]);
  const [cantRecibida, setcantRecibida] = useState([]);
  const [fechaDeRecepcion, setFechaDeRecepcion] = useState([]);
  const [guiaDespacho, setGuiaDespacho] = useState([]);

  const handleChangeNumeroDeSolicitud = (event) => {
    setNumSolicitud(event.target.value);
  };

  const handleChangeCantidadRecibida = (event) => {
    setcantRecibida(event.target.value);
  };

  const handleChangeFechaDeRecepcion = (event) => {
    setFechaDeRecepcion(event.target.value);
  };

  const handleChangeGuiaDespacho = (event) => {
    setGuiaDespacho(event.target.value);
  };

  console.log(guiaDespacho);

  const solicitudes = collection(db, "solicitudesDeCaucho");

  const actualizarSolicitud = async (a, b) => {
    console.log(a);
    await addDoc(solicitudes, {
      CantidadRecibica: cantRecibida,
      FechaDeRecibido: fechaDeRecepcion,
      NumeroDeSolicitud: numSolicitud,
      GuiaDeDespacho: guiaDespacho,
      ...a,
    });
  };

  const handleAdd = async (e) => {
    try {
      for (let i = 0; i < datas.length; i++) {
        const dato = datas[i];
        let data = [];
        data.push({
          ...dato,
        });
        console.log(data);
        setTimeout(cargaData(data), 500);
        setData([]);
      }
    } catch (error) {
      console.log(error);
    }
    setItems([]);
  };

  const docRef = query(
    collection(db, "solicitudesDeCaucho"),
    orderBy("NumeroDeSolicitud")
  );

  useEffect(() => {
    const solicitudes = async () => {
      const solicitudNro = await getDocs(docRef);

      let list = [];
      solicitudNro.forEach((doc) => {
        list.push({ ...doc.data() });
        setSolicitud(list);
      });
    };
    solicitudes().catch(console.error);
  }, []);

  return (
    <div className="container">
      <div>
        <form>
          <table className="table table-sm">
            <thead>
              <tr>
                <th>Caucho</th>
                <th>Cantidad</th>
                <th>Fecha de Solicitud</th>
                <th>Numero de Solicitud</th>
                <th>Cantidad Recibida</th>
                <th>Fecha de Recepción</th>
                <th>Guia de Despacho</th>
              </tr>
            </thead>
            <tbody>
              {solicitud.map((pre, i) => (
                <tr key={i}>
                  <th>
                    <input
                      type="text"
                      className="text-center"
                      placeholder={pre.TipoDeCaucho}
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      disabled
                    />
                  </th>
                  <th>
                    <input
                      type="text"
                      className="text-center"
                      placeholder={pre.CantidadSolicitada}
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      disabled
                    />
                  </th>
                  <th>
                    <input
                      type="text"
                      className="text-center"
                      placeholder={pre.FechaDeSolicitud}
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      disabled
                    />
                  </th>
                  <th>
                    <input
                      type="text"
                      name="numeroDeSolicitud"
                      id=""
                      defaultValue={pre.numeroDeSolicitud}
                      placeholder="Solicitud..."
                      onChange={handleChangeNumeroDeSolicitud}
                    />
                  </th>
                  <th>
                    <input
                      type="number"
                      name="cantidadRecibida"
                      id=""
                      defaultValue={pre.CantidadRecibida}
                      placeholder="Kg."
                      onChange={handleChangeCantidadRecibida}
                    />
                  </th>
                  <th>
                    <input
                      type="date"
                      name="fechaRecepcion"
                      id=""
                      defaultValue={pre.FechaDeRecepcion}
                      placeholder="Kg."
                      onChange={handleChangeFechaDeRecepcion}
                    />
                  </th>
                  <th>
                    <input
                      type="text"
                      name="GuiaDespacho"
                      defaultValue={pre.GuiaDespacho}
                      id=""
                      placeholder="Nro. de Guia"
                      onChange={handleChangeGuiaDespacho}
                    />
                    <button
                      className="btn btn-success"
                      type="submit"
                      value="Agregar"
                      onClick={(e) => {
                        e.preventDefault();
                        actualizarSolicitud(pre);
                      }}
                    >
                      ✔
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};
