import Head from "next/head";
import { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function Home() {
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1");
      const data = await response.json();
      
      // The data structure might be different, so adjust the code accordingly
      const formattedData = data.prices.map((priceData) => ({
        date: new Date(priceData[0]),
        price: priceData[1]
      }));
    
      const margin = { top: 20, right: 20, bottom: 30, left: 50 };
      const width = 800 - margin.left - margin.right;
      const height = 400 - margin.top - margin.bottom;

      const svg = d3
        .select(chartRef.current)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      const x = d3
        .scaleTime()
        .domain(d3.extent(formattedData, (d) => d.date))
        .range([0, width]);

      const y = d3
        .scaleLinear()
        .domain([0, d3.max(formattedData, (d) => d.price)])
        .range([height, 0]);

      const line = d3
        .line()
        .x((d) => x(d.date))
        .y((d) => y(d.price));

      svg
        .append("path")
        .datum(formattedData)
        .attr("class", "line")
        .attr("d", line);

      svg
        .append("g")
        .attr("class", "x-axis")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

      svg.append("g").attr("class", "y-axis").call(d3.axisLeft(y));
    };

    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <div ref={chartRef}></div>
      </main>
    </>
  );
}
