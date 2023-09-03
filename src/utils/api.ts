export const apiCall = (path) =>
  fetch(path, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => res.json());

export const periodicData = () => apiCall("./periodic.json");

export const fetchMaterials = async (data) => {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/materials`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
