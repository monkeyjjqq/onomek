import axios from "axios";

export default async function handler(req, res) {
  const { path, q, o } = req.query;

  try {
    const response = await axios.get(`https://kemono.cr/api/v1${path}`, {
      params: { q: q, o: o }
    });
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
