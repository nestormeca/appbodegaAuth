import React from "react";
import TablaStockconBotonesEliminar from "../TablaStockconBotonesEliminar";
import TablaConsumo from "../TablaConsumo";
import { BotonVolver } from "../../BotonVolver";

const PR2 = () => {
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
