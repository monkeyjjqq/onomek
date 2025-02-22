import axios from "axios";

export default async function handler(req, res) {
  const { path } = req.query;

  try {
    const response = await axios.get(path);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
