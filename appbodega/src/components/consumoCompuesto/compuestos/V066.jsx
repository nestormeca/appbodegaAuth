import React from "react";
import TablaStockconBotonesEliminar from "../TablaStockconBotonesEliminar";
import TablaConsumo from "../TablaConsumo";
import { BotonVolver } from "../../BotonVolver";

const V066 = () => {
  return (
    <div className="container">
      <BotonVolver />
      <TablaStockconBotonesEliminar
        nombre={"V066"}
        codigoCaucho={450289}
        descripcion={"ORBITIRA V4 PR 8"}
        uso={"RODADO TRANSPORTE EN TERRENOS AGRESIVOS"}
        dureza={66}
        mezcla={210878}
      />
      <TablaConsumo nombre={"V066"} codigoCaucho={450289} />
    </div>
  );
};

export default V066;
