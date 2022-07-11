import React, { useState } from "react";
import * as XLSX from "xlsx";
import { addDoc, Timestamp } from "firebase/firestore";
import { cauchoConsignado, db } from "../../firebase";

const Convertir = () => {
  const [items, setItems] = useState([]);

  //const cargados = collection(db, "cauchoConsignado");
  const cargaData = (a) => {
    addDoc(cauchoConsignado, { ...a });
  };
  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;
        const wb = XLSX.read(bufferArray, { type: "buffer" });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);
        resolve(data);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
    promise.then((d) => {
      setItems(d);
    });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      for (let i = 0; i < items.length; i++) {
        const dato = items[i];
        let data = [];
        data.push({
          ...dato,
          Caducidad: new Date(
            (dato.Caducidad - (25567 + 2)) * 86400 * 1000
          ).toLocaleDateString(),
          FechaRecibo: Timestamp.now(),
        });

        setTimeout(cargaData(...data), 500);
      }
    } catch (error) {
      console.log(error);
    }
    setItems([]);
  };

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-6">
          <input
            type="file"
            onChange={(e) => {
              const file = e.target.files[0];

              readExcel(file);
            }}
          />
        </div>
        <div className="col-6">
          <button type="submit" onClick={handleAdd}>
            Subir
          </button>
        </div>
      </div>
      <hr />
      <p className="text-center">Pre-Visualización</p>
      <div>
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Codigo Vipal</th>
              <th>Serie</th>
              <th>Lote</th>
              <th>Kilos</th>
              <th>Caducidad</th>
              <th>Solicitud</th>
            </tr>
          </thead>
          <tbody>
            {items.map((d, i) => (
              <tr key={i}>
                <th>{d.Codigo}</th>
                <th>{d.Serie}</th>
                <th>{d.Lote}</th>
                <th>{d.Kilos}</th>
                <th>{d.Caducidad}</th>
                <th>{d.Solicitud}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Convertir;
