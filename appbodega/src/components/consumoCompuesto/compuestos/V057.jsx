import React from "react";
import TablaStockconBotonesEliminar from "../TablaStockconBotonesEliminar";
import TablaConsumo from "../TablaConsumo";

const V057 = () => {
  return (
    <>
      <TablaStockconBotonesEliminar
        nombre={"V057"}
        codigoCaucho={451004}
        descripcion={"ORBITIRA V5 BASE OTR"}
        uso={"COMPUESTO DE BASE EN TIRAS"}
        dureza={57}
        mezcla={210891}
      />
      <TablaConsumo nombre={"V057"} codigoCaucho={451004} />
    </>
  );
};

export default V057;
