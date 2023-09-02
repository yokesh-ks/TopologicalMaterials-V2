import React, { useEffect } from "react";
import Head from "next/head";
import Header from "../src/components/Header";
import { periodicData } from "../src/utils/api";
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

  const handleElement = (e) => {
    const element = e.target.innerText;
    let filterData = [...selectedElement];
    if (!selectedElement.includes(element)) {
      filterData.push(element);
    } else {
      filterData = filterData.filter((item) => item !== element);
    }
    setSelectedElement(filterData);
  };

  return (
    <>
      <Head>
        <title>Yokesh Tools</title>
        <meta name="description" content="Tools" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

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
