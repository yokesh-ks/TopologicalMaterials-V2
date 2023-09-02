const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

export default async function handler(req, res) {
  const element = "Fe2O3";
  const path = `${API_URL}/${element}/vasp?API_KEY=${API_KEY}`;
  const response = await fetch(path, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const final = await response.json();
  res.status(200).json({ result: final?.response });
}
