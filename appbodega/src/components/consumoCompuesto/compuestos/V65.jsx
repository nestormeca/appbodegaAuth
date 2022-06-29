import React from "react";
import TablaStockconBotonesEliminar from "../TablaStockconBotonesEliminar";
import TablaConsumo from "../TablaConsumo";
import { BotonVolver } from "../../BotonVolver";

const V65 = () => {
  return (
    <>
      <BotonVolver />
      <TablaStockconBotonesEliminar
        nombre={"V65"}
        codigoCaucho={409547}
        descripcion={"MEZCLA V4 PR"}
        uso={"BANDA DE RODADO TRANSPORTE"}
        dureza={65}
        mezcla={210547}
      />
      <TablaConsumo nombre={"V65"} codigoCaucho={409547} />
    </>
  );
};

export default V65;
