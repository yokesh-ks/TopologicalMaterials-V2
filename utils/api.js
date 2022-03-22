const apiUrl = "https://www.materialsproject.org";

export const apiCall = (path) =>
  fetch(path, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => res.json());

export const periodicData = () => apiCall("./periodic.json");

export const apiCall2 = (path) =>
  fetch(path, {
    method: "GET",
    redirect: "follow",
    mode: "no-cors",
  })
    .then((response) => response.text())

export const materialOutput = (element) =>
  apiCall2(
    `${apiUrl}/rest/v2/materials/${element}/vasp?API_KEY=arSoZc9MekEHUDuh`
  );