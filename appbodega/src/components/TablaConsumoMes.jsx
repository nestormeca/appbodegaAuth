import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect } from "react";
import { consumidos } from "../firebase";
import { db } from "../firebase";
import { useState } from "react";

const TablaConsumoMes = () => {
  const [data, setData] = useState([]);

  const q = query(consumidos, where("Codigo", "==", "409607"));

  useEffect(() => {
    const cargarMesV62 = async () => {
      const queryMes = await getDocs(collection(db, "consumo-07-2022"));
      let list = [];
      queryMes.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
        setData(list);
      });
    };
    cargarMesV62().catch(console.error);
  }, []);

  let filtroV62 = data.filter((d) => d.Codigo == 409607);
  let filtroV63 = data.filter((d) => d.Codigo == 409521);
  let filtroV1V63 = data.filter((d) => d.Codigo == 400894);
  let filtroV65 = data.filter((d) => d.Codigo == 409547);
  let filtroV064 = data.filter((d) => d.Codigo == 450287);
  let filtroV066 = data.filter((d) => d.Codigo == 450289);
  let filtroV057 = data.filter((d) => d.Codigo == 451004);
  let filtroPR2 = data.filter((d) => d.Codigo == 409829);

  const kilos = data.map((mov) => {
    return mov.Kilos;
  });

  const totalKilos = (d) => {
    const k = d.map((mov) => mov.Kilos);
    const h = k.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    return h;
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">COMPUESTO</th>
            <th scope="col">SEMANA 1</th>
            <th scope="col">SEMANA 2</th>
            <th scope="col">SEMANA 3</th>
            <th scope="col">SEMANA 4</th>
            <th scope="col">SEMANA 5</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>V62{totalKilos(filtroV62)}</th>
          </tr>
          <tr>
            <th>V63{totalKilos(filtroV63)}</th>
          </tr>
          <tr>
            <th>V1/63{totalKilos(filtroV1V63)}</th>
          </tr>
          <tr>
            <th>V65{totalKilos(filtroV65)}</th>
          </tr>
          <tr>
            <th>V064{totalKilos(filtroV064)}</th>
          </tr>
          <tr>
            <th>V066{totalKilos(filtroV066)}</th>
          </tr>
          <tr>
            <th>V057{totalKilos(filtroV057)}</th>
          </tr>
          <tr>
            <th>PR2{totalKilos(filtroPR2)}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TablaConsumoMes;
