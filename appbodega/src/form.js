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
    id: "directoriocaucho",
    label: "Compuesto de Caucho",
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
  {
    id: "solicitudDeCompuesto",
    label: "Solicitud de Compuesto",
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
    id: "Enero",
    label: "Enero",
  },
  {
    id: "Febrero",
    label: "Febrero",
  },
  {
    id: "Marzo",
    label: "Marzo",
  },
  {
    id: "Abril",
    label: "Abril",
  },
  {
    id: "Mayo",
    label: "Mayo",
  },
  {
    id: "Junio",
    label: "Junio",
  },
  {
    id: "Julio",
    label: "Julio",
    active: "active",
  },
  {
    id: "Agosto",
    label: "Agosto",
  },
  {
    id: "Septiembre",
    label: "Septiembre",
  },
  {
    id: "Octubre",
    label: "Octubre",
  },
  {
    id: "Noviembre",
    label: "Noviembre",
  },
  {
    id: "Diciembre",
    label: "Diciembre",
  },
];

export const filtroColina = (data) => {
  const datos = data.filter((d) => d.quienConsumio == "Colina");
  return datos;
};

export const filtroTierraAmarilla = (data) => {
  const datos = data.filter((d) => d.quienConsumio == "Tierra Amarilla");
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
