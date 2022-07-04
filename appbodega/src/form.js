export const cargaInputs = [
  {
    id: "recargaDiesel",
    label: "Recarga de Diesel",
  },
  {
    id: "sustanciasPeligrosas",
    label: "Bodega de Sustancias Peligrosas",
  },
  {
    id: "compuestosCaucho",
    label: "Consumo de Compuesto de Caucho",
  },
  {
    id: "consumoParches",
    label: "Consumo de Parches",
  },
  {
    id: "epp",
    label: "Elementos de Seguridad",
  },
  {
    id: "herramientas",
    label: "Herramientas",
  },
  {
    id: "mantencion",
    label: "Mantencion",
  },
  {
    id: "stockRepuestos",
    label: "Stock de Repuestos",
  },
];

export const directorioCompuestos = [
  {
    id: "v62",
    label: "V62",
  },
  {
    id: "v63",
    label: "V63",
  },
  {
    id: "v65",
    label: "V65",
  },
  {
    id: "v1v63",
    label: "V1/63",
  },
  {
    id: "v064",
    label: "V064",
  },
  {
    id: "v066",
    label: "V066",
  },
  {
    id: "v057",
    label: "V057",
  },
  {
    id: "pr2",
    label: "PR2",
  },
];

export const mesAno = [
  {
    id: "enero",
    label: "Enero",
  },
  {
    id: "febrero",
    label: "Febrero",
  },
  {
    id: "marzo",
    label: "Marzo",
  },
  {
    id: "abril",
    label: "Abril",
  },
  {
    id: "mayo",
    label: "Mayo",
  },
  {
    id: "junio",
    label: "Junio",
  },
  {
    id: "julio",
    label: "Julio",
  },
  {
    id: "agosto",
    label: "Agosto",
    active: "active",
  },
  {
    id: "septiembre",
    label: "Septiembre",
  },
  {
    id: "octubre",
    label: "Octubre",
  },
  {
    id: "noviembre",
    label: "Noviembre",
  },
  {
    id: "diciembre",
    label: "Diciembre",
  },
];

export const filtroColina = (data) => {
  const datos = data.filter((d) => d.quienConsumio == "colina");
  return datos;
};

export const filtroTierraAmarilla = (data) => {
  const datos = data.filter((d) => d.quienConsumio == "tierraAmarilla");
  return datos;
};

export const filtroV62 = (data) => {
  const datos = data.filter((d) => d.Codigo == 409607);
  return datos;
};

export const filtroV63 = (data) => {
  const datos = data.filter((d) => d.Codigo == 409521);
  return datos;
};

export const filtroV1V63 = (data) => {
  const datos = data.filter((d) => d.Codigo == 400894);
  return datos;
};
export const filtroV65 = (data) => {
  const datos = data.filter((d) => d.Codigo == 409547);
  return datos;
};
export const filtroV064 = (data) => {
  const datos = data.filter((d) => d.Codigo == 450287);
  return datos;
};
export const filtroV066 = (data) => {
  const datos = data.filter((d) => d.Codigo == 450289);
  return datos;
};
export const filtroV057 = (data) => {
  const datos = data.filter((d) => d.Codigo == 451004);
  return datos;
};
export const filtroPR2 = (data) => {
  const datos = data.filter((d) => d.Codigo == 409829);
  return datos;
};
