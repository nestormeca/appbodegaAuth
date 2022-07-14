import { async } from "@firebase/util";
import {
  addDoc,
  collection,
  Timestamp,
  doc,
  setDoc,
  getDocs,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { db } from "../../firebase";

export const SolicitudDeCompuesto = () => {
  const { register, handleSubmit } = useForm();
  const [datas, setData] = useState([]);
  const [items, setItems] = useState([]);
  const [solicitud, setSolicitud] = useState([]);

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

  //const solicitudCaucho = collection(db, "solicitudCaucho");

  const onSubmit = (d) => {
    const preSolicitud = {
      tipoDeCaucho: d.tipoDeCaucho,
      cantidadPedida: d.cantidadPedida,
    };

    setData([...datas, preSolicitud]);
  };

  const cargaData = (b) => {
    setDoc(doc(db, "solicitudCaucho", `${solicitud.length + 1}`), {
      ...b,
      FechaRecibo: getDate(),
    });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      for (let i = 0; i < datas.length; i++) {
        const dato = datas[i];
        let data = [];
        data.push({
          ...dato,
          FechaRecibo: getDate(),
        });

        setTimeout(cargaData(datas), 500);
        setData([]);
      }
    } catch (error) {
      console.log(error);
    }
    setItems([]);
  };

  const docRef = query(collection(db, "solicitudCaucho"));

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

  console.log(solicitud);

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            Tipo de Caucho:
          </label>
          <select
            className="form-select"
            id="inputGroupSelect01"
            defaultValue=""
            {...register("tipoDeCaucho")}
          >
            <option value="" disabled>
              Selecciona...
            </option>

            <option value="V62">V62 (409607)</option>
            <option value="V63">V63 (409521)</option>
            <option value="V1V63">V1/V63 (400894)</option>
            <option value="V65">V65 (409547)</option>
            <option value="V064">V064 (450287)</option>
            <option value="V066">V066 (450289)</option>
            <option value="V057">V057 (451004)</option>
            <option value="PR2">PR2 (409829)</option>
          </select>
        </div>

        <div className="d-flex  flex-column align-items-center">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Cantidad:
            </span>
            <input
              type="number"
              className="form-control"
              placeholder="Cantidad"
              aria-label="cantidad"
              name="cantidad"
              aria-describedby="basic-addon1"
              {...register("cantidadPedida")}
            />
          </div>
        </div>
        <div className="">Solicitudes Realizadas:</div>
        <input className="btn btn-success" type="submit" value="Agregar" />
      </form>
      <hr />
      <div>
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Caucho</th>
              <th>Cantidad</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((pre, i) => (
              <tr key={i}>
                <th>{pre.cantidadPedida}</th>
                <th>{pre.tipoDeCaucho}</th>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-success" onClick={handleAdd}>
          Enviar
        </button>
      </div>
    </div>
  );
};
