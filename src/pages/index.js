
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import BitcoinChart from "../components/BitcoinChart";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <BitcoinChart />
      </main>
    </>
  );
}

