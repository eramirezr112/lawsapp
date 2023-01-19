import Lodash from "lodash";

const paths = [
  { codId: 1, desTipo: "LEYES", path: "/laws" },
  { codId: 2, desTipo: "REGLAMENTOS", path: "/reglamentos" },
  { codId: 3, desTipo: "DECRETOS", path: "/decretos" },
  { codId: 4, desTipo: "ACUERDOS", path: "/acuerdos" },
  { codId: 5, desTipo: "RESOLUCIONES", path: "/resoluciones" },
  { codId: 6, desTipo: "CIRCULARES", path: "/circulares" },
  { codId: 7, desTipo: "DICTAMENES", path: "/dictamenes" },
  { codId: 8, desTipo: "VOTOS", path: "/votos" },
];

export const getPathById = (id) => {
  const objPath = Lodash.find(paths, { codId: id });
  return objPath;
};

export const getPathByName = (name) => {
  const objPath = Lodash.find(paths, { desTipo: name });
  return objPath;
};
