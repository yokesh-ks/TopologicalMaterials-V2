const MATERIALS_API_URL = process.env.MATERIALS_API_URL;
const MATERIALS_API_KEY = process.env.MATERIALS_API_KEY;

export default async function handler(req, res) {
  const { element } = req.body;
  const path = `${MATERIALS_API_URL}/${element}/vasp?API_KEY=${MATERIALS_API_KEY}`;
  const response = await fetch(path, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const final = await response.json();
  res.status(200).json({ result: final?.response });
}
