import React from "react";
import TablaStockconBotonesEliminar from "../TablaStockconBotonesEliminar";
import TablaConsumo from "../TablaConsumo";
import { BotonVolver } from "../../BotonVolver";

const V1V63 = () => {
  return (
    <>
      <BotonVolver />
      <TablaStockconBotonesEliminar
        nombre={"V1/63"}
        codigoCaucho={400894}
        descripcion={"COJÍN CALANDRADO 250x1 mm"}
        uso={"CALANDRADO OTR 250x1,0"}
        dureza={50}
        mezcla={210039}
      />
      <TablaConsumo nombre={"V1/63"} codigoCaucho={400894} />
    </>
  );
};

export default V1V63;
