import React, { useEffect, useState } from "react";
import TablaStockconBotonesEliminar from "../TablaStockconBotonesEliminar";
import TablaConsumo from "../TablaConsumo";
import { BotonVolver } from "../../BotonVolver";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../../firebase";

const PR2 = () => {
  const [filtroMes, setfiltroMes] = useState([]);

  const consumidosColeccion = collection(db, "cauchoConsumido");

  const consumidosRango = query(
    consumidosColeccion,
    where("fecha", ">=", 1648788000000),
    where("fecha", "<=", 1651376400000),
    orderBy("fecha", "asc")
  );

  useEffect(() => {
    const consumoMes = async () => {
      const queryMes = await getDocs(consumidosRango);
      let list = [];
      queryMes.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
        setfiltroMes(list);
      });
    };
    consumoMes().catch(console.error);
  }, []);

  console.log(filtroMes);

  return (
    <>
      <BotonVolver />
      <TablaStockconBotonesEliminar
        nombre={"PR2"}
        codigoCaucho={409829}
        descripcion={"MEZCLA V4 PR6"}
        uso={"BANDA CARGADOR/TRANSPORTE "}
        dureza={70}
        mezcla={210829}
      />
      <TablaConsumo nombre={"PR2"} codigoCaucho={409829} />
    </>
  );
};

export default PR2;
