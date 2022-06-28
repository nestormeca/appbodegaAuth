import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { db } from "../../firebase";
import moment from "moment";

export const BotonInicioPeriodo = () => {
  const getMonth2 = () => {
    let id = new Date();
    let month = id.getTime();
    return month;
  };

  const getMonth = () => {
    let date = new Date();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    if (month < 10) {
      return `0${1 + month}-${year}`;
    } else {
      return `${1 + month}-${year}`;
    }
  };

  const d = new Date();
  const inicio = moment(d).format("DD-MM-YYYY");

  const consumidos = collection(db, "consumidos");

  const crearPeriodo = async (e) => {
    e.preventDefault();
    addDoc(collection(db, `consumo-${getMonth()}`), { fecha: `${inicio}` });
  };

  return (
    <div>
      <button onClick={crearPeriodo}>Iniciar Inventario</button>
    </div>
  );
};
