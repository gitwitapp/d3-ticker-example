
export async function getBitcoinData() {
  const response = await fetch("https://api.example.com/bitcoin");
  const data = await response.json();
  return data;
}

