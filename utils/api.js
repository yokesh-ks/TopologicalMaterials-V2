export const apiCall = (path) =>
  fetch(path, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => res.json());

export const periodicData = () => apiCall("./periodic.json");

export const fetchMaterials = () => apiCall("/api/materials");
