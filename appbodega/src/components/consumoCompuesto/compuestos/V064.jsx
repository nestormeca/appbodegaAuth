import React from "react";
import TablaStockconBotonesEliminar from "../TablaStockconBotonesEliminar";
import TablaConsumo from "../TablaConsumo";
import { BotonVolver } from "../../BotonVolver";

const V064 = () => {
  return (
    <>
      <BotonVolver />
      <TablaStockconBotonesEliminar
        nombre={"V064"}
        codigoCaucho={450287}
        descripcion={"ORBITIRA V4 PR 10"}
        uso={"RODADO TRANSPORTE EN TERRENOS MUY AGRESIVOS"}
        dureza={65}
        mezcla={210880}
      />
      <TablaConsumo nombre={"V63"} codigoCaucho={450287} />
    </>
  );
};

export default V064;
