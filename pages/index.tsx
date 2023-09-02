import React, { useEffect } from "react";
import Head from "next/head";
import { Header } from "../src/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Topological Materials</title>
        <meta name="description" content="Tools" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </>
  );
}
