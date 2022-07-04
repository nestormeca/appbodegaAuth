import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { cauchoConsumido, db } from "../../../../firebase";
import {
  filtroColina,
  filtroTierraAmarilla,
  filtroV62,
  filtroV63,
  filtroV1V63,
  filtroV65,
  filtroV057,
  filtroV066,
  filtroV064,
  filtroPR2,
} from "../../../../form";

const Diciembre = () => {
  //Recordar arreglar la importacion de cacuchoConsumido del archivo de firebase

  const [data, setData] = useState([]);

  const consulta = collection(db, "cauchoConsumido");

  const q = query(consulta, where("periodoInventario", "==", "diciembre"));

  useEffect(() => {
    const cargarMes = async () => {
      const queryMes = await getDocs(q);
      let list = [];
      queryMes.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
        setData(list);
      });
    };
    cargarMes().catch(console.error);
  }, []);

  const filtroQuienConsumioColina = filtroColina(data);
  const filtroQuienConsumioTAM = filtroTierraAmarilla(data);

  const filtroV62Colina = filtroV62(filtroQuienConsumioColina);
  const filtroV62TAM = filtroV62(filtroQuienConsumioTAM);

  const filtroV63Colina = filtroV63(filtroQuienConsumioColina);
  const filtroV63TAM = filtroV63(filtroQuienConsumioTAM);

  const filtroV1V63Colina = filtroV1V63(filtroQuienConsumioColina);
  const filtroV1V63TAM = filtroV1V63(filtroQuienConsumioTAM);

  const filtroV65Colina = filtroV65(filtroQuienConsumioColina);
  const filtroV65TAM = filtroV65(filtroQuienConsumioTAM);

  const filtroV064Colina = filtroV064(filtroQuienConsumioColina);
  const filtroV064TAM = filtroV064(filtroQuienConsumioTAM);

  const filtroV066Colina = filtroV066(filtroQuienConsumioColina);
  const filtroV066TAM = filtroV066(filtroQuienConsumioTAM);

  const filtroV057Colina = filtroV057(filtroQuienConsumioColina);
  const filtroV057TAM = filtroV057(filtroQuienConsumioTAM);

  const filtroPR2Colina = filtroPR2(filtroQuienConsumioColina);
  const filtroPR2TAM = filtroPR2(filtroQuienConsumioTAM);

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
    <div className="container d-flex justify-content-center flex-column">
      <table className="table">
        <thead>
          <tr>
            <th scope="col-6">COMPUESTO</th>
            <th scope="col-6" className="text-uppercase">
              PLANTA COLINA
            </th>
            <th scope="col-6" className="text-uppercase">
              PLANTA TIERRA AMARILLA
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>V62</th>
            <th>{totalKilos(filtroV62Colina)}</th>
            <th>{totalKilos(filtroV62TAM)}</th>
          </tr>
          <tr>
            <th>V63</th>
            <th>{totalKilos(filtroV63Colina)}</th>
            <th>{totalKilos(filtroV63TAM)}</th>
          </tr>
          <tr>
            <th>V1/63</th>
            <th>{totalKilos(filtroV1V63Colina)}</th>
            <th>{totalKilos(filtroV1V63TAM)}</th>
          </tr>
          <tr>
            <th>V65</th>
            <th>{totalKilos(filtroV65Colina)}</th>
            <th>{totalKilos(filtroV65TAM)}</th>
          </tr>
          <tr>
            <th>V064</th>
            <th>{totalKilos(filtroV064Colina)}</th>
            <th>{totalKilos(filtroV064TAM)}</th>
          </tr>
          <tr>
            <th>V066</th>
            <th>{totalKilos(filtroV066Colina)}</th>
            <th>{totalKilos(filtroV066TAM)}</th>
          </tr>
          <tr>
            <th>V057</th>
            <th>{totalKilos(filtroV057Colina)}</th>
            <th>{totalKilos(filtroV057TAM)}</th>
          </tr>
          <tr>
            <th>PR2</th>
            <th>{totalKilos(filtroPR2Colina)}</th>
            <th>{totalKilos(filtroPR2TAM)}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Diciembre;
