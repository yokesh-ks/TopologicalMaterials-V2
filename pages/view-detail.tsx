import React from "react";
import Head from "next/head";
import { Header } from "../src/components/Header";
import { fetchMaterials } from "@/utils/api";
import { Badge } from "@/components/ui/badge";
import { Card, CardTitle } from "@/components/ui/card";
import { LatticeTable } from "@/components/materials/lattice-table";
import { PropertiesTable } from "@/components/materials/properties-table";
import { SymmetryTable } from "@/components/materials/symmetry-table";

export default function ViewDetail({ result }) {
  return (
    <>
      <Head>
        <title>Materials Explorer</title>
        <meta name="description" content="Tools" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div
        className="w-full gap-10"
        style={{ paddingTop: 100, maxWidth: 890, margin: "auto" }}
      >
        <CardTitle>{result?.full_formula}</CardTitle>
        {/* <ReactMarkdown className="whitespace-pre-wrap" skipHtml>
          {result?.cif}
        </ReactMarkdown> */}
        <div className="flex gap-6 my-4">
          <Card
            style={{ flex: 2 }}
            className="p-4 flex items-center justify-center"
          >
            <Badge>Coming Soon</Badge>
          </Card>
          <PropertiesTable result={result} />
        </div>

        <CardTitle>Crystal Structure</CardTitle>
        <div className="flex gap-6">
          <LatticeTable result={result} />
          <SymmetryTable result={result} />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const id = ctx.query.id;
  const payload = {
    element: id,
  };
  const response = await fetchMaterials(payload);

  return {
    props: {
      result: response?.result?.[0],
    },
  };
}
