import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../src/components/Header";
import { periodicData, materialOutput } from "../utils/api";
import PeriodicTable from "../src/components/PeriodicTable";

export default function Home() {
  const [allPeriodic, setAllPeriodic] = React.useState([]);
  const [selectedElement, setSelectedElement] = React.useState([]);

  useEffect(() => {
    (async () => {
      const data = await periodicData();
      setAllPeriodic(data);
    })();
  }, []);

  const handleSearch = async () => {
    const response = await materialOutput(selectedElement)
  }

  const handleElement = (e) => {
    if (isNaN(e.target.innerText)) {
      const element = e.target.innerText;
      let filterData = [...selectedElement];
      if (!selectedElement.includes(element)) {
        filterData.push(element);
      } else {
        filterData = filterData.filter((item) => item !== element);
      }
      setSelectedElement(filterData);
    }
  };

  return (
    <>
      <Head>
        <title>Topological Materials</title>
        <meta name="description" content="Tools" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        selectedElement={selectedElement}
        setSelectedElement={setSelectedElement}
        handleSearch={handleSearch}
      />

      <div style={{ marginTop: 100 }}></div>

      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <PeriodicTable
          data={allPeriodic}
          handleElement={handleElement}
          selectedElement={selectedElement}
        />
      </div>
    </>
  );
}
