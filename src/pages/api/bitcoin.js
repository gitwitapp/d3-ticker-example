
import { getBitcoinData } from "../../utils/api";

export default async function handler(req, res) {
  const bitcoinData = await getBitcoinData();
  res.status(200).json(bitcoinData);
}

