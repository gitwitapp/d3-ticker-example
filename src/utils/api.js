
import axios from "axios";

export async function getBitcoinData() {
  try {
    const response = await axios.get("/api/bitcoin");
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch Bitcoin data");
  }
}

