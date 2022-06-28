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
export const columns = [
  //   { field: "id", headerName: "ID", width: 70 },
  { field: "compuesto", headerName: "Compuesto", width: 130 },
  { field: "semana1", headerName: "Semana 1", type: "number", width: 90 },
  {
    field: "semana2",
    headerName: "Semana 2",
    type: "number",
    width: 90,
  },
  {
    field: "semana3",
    headerName: "Semana 3",
    type: "number",
    width: 90,
  },
  {
    field: "semana4",
    headerName: "Semana 4",
    type: "number",
    width: 90,
  },
  {
    field: "semana5",
    headerName: "Semana 5",
    type: "number",
    width: 90,
  },
  {
    field: "consumototal",
    headerName: "Consumo del Mes",
    type: "number",
    width: 150,
  },

  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 60,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
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
    id: "abrir",
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
