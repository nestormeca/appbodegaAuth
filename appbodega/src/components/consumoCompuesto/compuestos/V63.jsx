import React from "react";
import TablaStockconBotonesEliminar from "../TablaStockconBotonesEliminar";
import TablaConsumo from "../TablaConsumo";

const V63 = () => {
  return (
    <>
      <TablaStockconBotonesEliminar
        nombre={"V63"}
        codigoCaucho={409521}
        descripcion={"MEZCLA V5 PARA LIGACIÓN ESPECIAL"}
        uso={
          "COMPUESTO DE UNIÓN BANDA COJÍN Y DE REPARACIONES DE BANDA DE RODADO"
        }
        dureza={48}
        mezcla={210039}
      />
      <TablaConsumo nombre={"V63"} codigoCaucho={409521} />
    </>
  );
};

export default V63;
