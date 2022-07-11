import React from "react";
import moment from "moment";
import { useEffect, useState } from "react";
import {
  getDocs,
  onSnapshot,
  query,
  where,
  collection,
} from "firebase/firestore";
import { db } from "../../firebase";
import {
  directorioCompuestos,
  filtroPR2,
  filtroV057,
  filtroV064,
  filtroV066,
  filtroV1V63,
  filtroV62,
  filtroV63,
  filtroV65,
} from "../../form";

export default function ResumenDeStock() {
  const [data, setData] = useState([]);

  const cauchoConsignado = collection(db, "cauchoConsignado");

  useEffect(() => {
    const unsub = onSnapshot(
      cauchoConsignado,
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

  const stockV62 = filtroV62(data);
  const stockV63 = filtroV63(data);
  const stockV163 = filtroV1V63(data);
  const stockV65 = filtroV65(data);
  const stockV064 = filtroV064(data);
  const stockV066 = filtroV066(data);
  const stockV057 = filtroV057(data);
  const stockPR2 = filtroPR2(data);

  const totalKilos = (d) => {
    const k = d.map((mov) => mov.Kilos);
    const h = k.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    return h;
  };

  const formatearNumero = (d) => {
    const formateo = d.toLocaleString("de-DE");

    return formateo;
  };

  return (
    <div className="container">
      <hr />
      <div className="row align-items-start">
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Compuesto</th>
              <th>Stock Bodega Consignada</th>
              <th>Stock Bodega Bailac</th>
              <th>Promedio de Consumo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>V62</th>
              <th>{formatearNumero(totalKilos(stockV62))}</th>
              <th></th>
              <th>3.016,8</th>
            </tr>
            <tr>
              <th>V63</th>
              <th>{formatearNumero(totalKilos(stockV63))}</th>
              <th></th>
              <th>1.593,3</th>
            </tr>
            <tr>
              <th>V1/V63</th>
              <th>{formatearNumero(totalKilos(stockV163))}</th>
              <th></th>
              <th>483,3</th>
            </tr>
            <tr>
              <th>V65</th>
              <th>{formatearNumero(totalKilos(stockV65))}</th>
              <th></th>
              <th>1.340,3</th>
            </tr>
            <tr>
              <th>V064</th>
              <th>{formatearNumero(totalKilos(stockV064))}</th>
              <th></th>
              <th>4.396,0</th>
            </tr>
            <tr>
              <th>V066</th>
              <th>{formatearNumero(totalKilos(stockV066))}</th>
              <th></th>
              <th>4.391,3</th>
            </tr>
            <tr>
              <th>V057</th>
              <th>{formatearNumero(totalKilos(stockV057))}</th>
              <th></th>
              <th>961,3</th>
            </tr>
            <tr>
              <th>PR2</th>
              <th>{formatearNumero(totalKilos(stockPR2))}</th>
              <th></th>
              <th>2.555,3</th>
            </tr>
          </tbody>
        </table>
      </div>
      <hr />
    </div>
  );
}
