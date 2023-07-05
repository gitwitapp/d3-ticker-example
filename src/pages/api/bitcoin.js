
import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.get("https://api.example.com/bitcoin");
    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch Bitcoin data" });
  }
}

