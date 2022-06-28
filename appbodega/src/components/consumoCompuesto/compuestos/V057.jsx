import React from "react";
import TablaStock from "../TablaStock";
import TablaConsumo from "../TablaConsumo";
import { BotonVolver } from "../../BotonVolver";

const V057 = () => {
  return (
    <>
      <BotonVolver />
      <TablaStock
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
