import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { cauchoConsumido, db } from "../../../../firebase";

const Noviembre = () => {
  //Recordar arreglar la importacion de cacuchoConsumido del archivo de firebase

  const [data, setData] = useState([]);

  const consulta = collection(db, "cauchoConsumido");

  const q = query(consulta, where("periodoInventario", "==", "noviembre"));

  useEffect(() => {
    const cargarMesV62 = async () => {
      const queryMes = await getDocs(q);
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
    <div className="container d-flex justify-content-center flex-column">
      <table className="table">
        <thead>
          <tr>
            <th scope="col-6">COMPUESTO</th>
            <th scope="col-6" className="text-uppercase">
              NOVIEMBRE
              {/* {
                (data[0].periodoInventario = undefined
                  ? "MES"
                  : data[0].periodoInventario)
              } */}
            </th>
            {/* <th scope="col">SEMANA 2</th>
            <th scope="col">SEMANA 3</th>
            <th scope="col">SEMANA 4</th>
            <th scope="col">SEMANA 5</th> */}
          </tr>
        </thead>
        <tbody>
          {/* {compuestoConsumido.map((comp) => (
            <tr>
              <th>{comp.id}</th>
              {console.log(comp.filtro(data))}
              <th>{totalKilos(`${comp.filtro(data)}`)}</th>
            </tr>
          ))} */}

          <tr>
            <th>V62</th>
            <th>{totalKilos(filtroV62)}</th>
          </tr>
          <tr>
            <th>V63</th>
            <th>{totalKilos(filtroV63)}</th>
          </tr>
          <tr>
            <th>V1/63</th>
            <th>{totalKilos(filtroV1V63)}</th>
          </tr>
          <tr>
            <th>V65</th>
            <th>{totalKilos(filtroV65)}</th>
          </tr>
          <tr>
            <th>V064</th>
            <th>{totalKilos(filtroV064)}</th>
          </tr>
          <tr>
            <th>V066</th>
            <th>{totalKilos(filtroV066)}</th>
          </tr>
          <tr>
            <th>V057</th>
            <th>{totalKilos(filtroV057)}</th>
          </tr>
          <tr>
            <th>PR2</th>
            <th>{totalKilos(filtroPR2)}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Noviembre;
