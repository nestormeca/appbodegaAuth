import React from "react";
import TablaStock from "../TablaStock";
import TablaConsumo from "../TablaConsumo";
import { BotonVolver } from "../../BotonVolver";

const V62 = () => {
  return (
    <>
      <BotonVolver />
      <TablaStock
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
