import React from "react";
import TablaStockconBotonesEliminar from "../TablaStockconBotonesEliminar";
import TablaConsumo from "../TablaConsumo";

const V62 = () => {
  return (
    <>
      <TablaStockconBotonesEliminar
        nombre={"V62"}
        codigoCaucho={409607}
        descripcion={"MEZCLA BASE OTR"}
        uso={"COMPUESTO DE BASE EN MANTAS"}
        dureza={60}
        mezcla={201607}
      />
      <TablaConsumo nombre={"V62"} codigoCaucho={409607} />
    </>
  );
};

export default V62;
