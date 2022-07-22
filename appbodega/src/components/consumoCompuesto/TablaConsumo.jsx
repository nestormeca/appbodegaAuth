import React from "react";
import moment from "moment";
//import { cauchoConsumido } from "../../firebase";
import { useEffect, useState } from "react";
import {
  getDocs,
  onSnapshot,
  query,
  where,
  collection,
} from "firebase/firestore";
import { db } from "../../firebase";

export default function TablaStock({ codigoCaucho, nombre }) {
  const [data, setData] = useState([]);

  const consumidos = collection(db, "cauchoConsumido");

  const consultaConsumoMes = query(
    consumidos,
    where("Codigo", "==", codigoCaucho)
  );

  // useEffect(() => {
  //   const consumoMes = async () => {
  //     const consulta = await getDocs(consultaConsumoMes);
  //     let list = [];
  //     consulta.forEach((doc) => {
  //       list.push({ id: doc.id, ...doc.data() });
  //       setData(list);
  //     });
  //   };
  //   consumoMes().catch(console.error);
  // }, []);

  useEffect(() => {
    const unsub = onSnapshot(
      consultaConsumoMes,
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

  console.log(data);

  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-2">
          Compuesto {nombre} {codigoCaucho}
        </div>
        <div className="col-2">
          <h2>Stock Consumidos: {totalKilos} Kg</h2>
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
                  <th className="w-0" scope="col">
                    Fecha Consumido:
                  </th>
                  <th className="w-0" scope="col">
                    Mes Inventario:
                  </th>
                  <th className="w-0" scope="col">
                    Planta:
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((d) => (
                  <tr key={d.id}>
                    <th>{d.Kilos}</th>
                    <th>{d.Serie}</th>
                    <th>{d.Lote}</th>
                    <th>{d.Caducidad}</th>
                    <th>{d.Solicitud}</th>
                    <th>{moment(d.fecha).format("L")}</th>
                    <th>{d.periodoInventario}</th>
                    <th>{d.quienConsumio}</th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
