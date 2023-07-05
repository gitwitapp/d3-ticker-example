import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.get("https://api.example.com/bitcoin");
    const bitcoinData = response.data;
    res.status(200).json(bitcoinData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch Bitcoin price data" });
  }
}
