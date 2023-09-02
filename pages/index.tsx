import React, { useEffect } from "react";
import Head from "next/head";
import { Header } from "../src/components/Header";
import { Hero } from "@/components/home/hero";
import { Features } from "@/components/home/features";
import { About } from "@/components/home/about";

export default function Home() {
  return (
    <>
      <Head>
        <title>Topological Materials</title>
        <meta name="description" content="Tools" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <Features />
      <About />
    </>
  );
}
