import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

  const q = query(consulta, where("periodoInventario", "==", "Diciembre"));

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

  console.log(kilos);

  const totalKilos = (d) => {
    const k = d.map((mov) => mov.Kilos);
    const h = k.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    return h;
  };

  return (
    <div className="container d-flex justify-content-center flex-column">
      <table className="table table-bordered table-hover table-sm">
        <thead>
          <tr>
            <th scope="col-4" className="text-uppercase col-2"></th>
            <th scope="col-4" className="text-uppercase col-5">
              <h5>PLANTA COLINA Kg</h5>
            </th>
            <th scope="col-4" className="text-uppercase col-5">
              <h5>PLANTA TIERRA AMARILLA Kg</h5>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <h5>
                <Link to="v62">V62 (409607)</Link>
              </h5>
            </th>
            <th>
              <h2>{totalKilos(filtroV62Colina)}</h2>
            </th>
            <th>
              <h2>{totalKilos(filtroV62TAM)}</h2>
            </th>
          </tr>
          <tr>
            <th>
              <h5>
                <Link to="v63">V63 (409521)</Link>
              </h5>
            </th>
            <th>
              <h2>{totalKilos(filtroV63Colina)}</h2>
            </th>
            <th>
              <h2>{totalKilos(filtroV63TAM)}</h2>
            </th>
          </tr>
          <tr>
            <th>
              <h5>
                <Link to="v1v63">V1/63 (400894)</Link>
              </h5>
            </th>
            <th>
              <h2>{totalKilos(filtroV1V63Colina)}</h2>
            </th>
            <th>
              <h2>{totalKilos(filtroV1V63TAM)}</h2>
            </th>
          </tr>
          <tr>
            <th>
              <h5>
                <Link to="v65">V65 (409547)</Link>
              </h5>
            </th>
            <th>
              <h2>{totalKilos(filtroV65Colina)}</h2>
            </th>
            <th>
              <h2>{totalKilos(filtroV65TAM)}</h2>
            </th>
          </tr>
          <tr>
            <th>
              <h5>
                <Link to="v064">V064 (450287)</Link>
              </h5>
            </th>
            <th>
              <h2>{totalKilos(filtroV064Colina)}</h2>
            </th>
            <th>
              <h2>{totalKilos(filtroV064TAM)}</h2>
            </th>
          </tr>
          <tr>
            <th>
              <h5>
                <Link to="v066">V066 (450289)</Link>
              </h5>
            </th>
            <th>
              <h2>{totalKilos(filtroV066Colina)}</h2>
            </th>
            <th>
              <h2>{totalKilos(filtroV066TAM)}</h2>
            </th>
          </tr>
          <tr>
            <th>
              <h5>
                <Link to="v057">V057 (450289)</Link>
              </h5>
            </th>
            <th>
              <h2>{totalKilos(filtroV057Colina)}</h2>
            </th>
            <th>
              <h2>{totalKilos(filtroV057TAM)}</h2>
            </th>
          </tr>
          <tr>
            <th>
              <h5>
                <Link to="pr2">PR2 (409547)</Link>
              </h5>
            </th>
            <th>
              <h2>{totalKilos(filtroPR2Colina)}</h2>
            </th>
            <th>
              <h2>{totalKilos(filtroPR2TAM)}</h2>
            </th>
          </tr>
          <tr>
            <th className="text-end">Total Consumido:</th>
            <th>
              <h2>{totalKilos(filtroQuienConsumioColina)}</h2>
            </th>
            <th>
              <h2>{totalKilos(filtroQuienConsumioTAM)}</h2>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Diciembre;
