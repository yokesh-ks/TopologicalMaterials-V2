import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Header } from "../src/components/Header";
import { periodicData } from "../src/utils/api";
import PeriodicTable from "../src/components/PeriodicTable";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { fetchMaterials } from "../src/utils/api";
import { Icon } from "@/icon";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/router";
import { useToast } from "@/components/ui/use-toast";

export default function Home() {
  const router = useRouter();
  const { toast } = useToast();
  const [allPeriodic, setAllPeriodic] = useState([]);
  const [selectedElement, setSelectedElement] = useState([]);
  const [showPeriodicTable, setShowPeriodicTable] = useState(true);
  const [materialResult, setMaterialResult] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  console.log({ materialResult });

  useEffect(() => {
    (async () => {
      const data = await periodicData();
      setAllPeriodic(data);
    })();
  }, []);

  const handleSearch = async () => {
    if (selectedElement.length === 0) {
      toast({
        variant: "destructive",
        title: "Oops! It seems you forgot to enter your search criteria.",
        description:
          " Please provide some information or properties to search for materials. The world of materials science is waiting for your exploration!",
      });
      return;
    }
    const payload = {
      element: selectedElement.join(""),
    };
    setIsSearching(true);
    setShowPeriodicTable(false);
    const response = await fetchMaterials(payload);
    setMaterialResult(response?.result);
    setIsSearching(false);
    console.log({ response });
  };

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
        <title>Materials Explorer</title>
        <meta name="description" content="Tools" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div
        className="flex items-center justify-center flex-col w-full gap-10"
        style={{ paddingTop: 100, maxWidth: 890, margin: "auto" }}
      >
        <div className="flex w-full">
          <Button
            variant="secondary"
            style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
          >
            Materials
          </Button>
          <Input value={selectedElement.join("")} style={{ borderRadius: 0 }} />
          <Tooltip>
            <TooltipTrigger>
              <Button
                variant="outline"
                style={{ borderRadius: 0 }}
                onClick={() => setShowPeriodicTable(!showPeriodicTable)}
              >
                <img
                  src="/periodic-table.png"
                  alt="image"
                  style={{ width: 40 }}
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>
                {showPeriodicTable
                  ? "Hide Periodic Table"
                  : "Show Periodic Table"}
              </p>
            </TooltipContent>
          </Tooltip>

          <Button
            style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
            onClick={() => handleSearch()}
          >
            Search
          </Button>
        </div>

        {isSearching ? (
          <>
            <Icon
              name="Spinner"
              className="mt-10 h-10 w-10 animate-spin text-primary"
            />
            <p>Searching for materials... Please wait.</p>
          </>
        ) : null}

        {showPeriodicTable ? (
          <PeriodicTable
            data={allPeriodic}
            handleElement={handleElement}
            selectedElement={selectedElement}
          />
        ) : null}

        {materialResult?.length === 0 && !showPeriodicTable && !isSearching ? (
          <>
            <Card className="flex w-full flex-col p-4 items-center justify-center gap-4 my-4">
              <CardTitle>Expand Your Search Horizons</CardTitle>
              <CardContent>
                We couldn&apos;t find any materials matching your criteria. Take
                a moment to broaden your search parameters or try different
                combinations. Our Materials Explorer is at your service to
                assist in your quest for discovery. Don&apos;t hesitate to
                refine and search again.
              </CardContent>

              <Button onClick={() => setShowPeriodicTable(!showPeriodicTable)}>
                Show Periodic Table
              </Button>
            </Card>
          </>
        ) : null}

        {materialResult?.length > 0 ? (
          <>
            <CardTitle>Results</CardTitle>
            {materialResult.map((item, index) => (
              <Card key={index} className="w-full relative p-4">
                <CardHeader className="p-0">
                  <CardTitle className="w-full relative">
                    <span>{item.full_formula}</span>
                    <div className="flex gap-2 absolute top-0 right-0">
                      {Object.entries(item.unit_cell_formula).map(
                        ([key, value]: any) => (
                          <Badge key={key}>
                            {key} - {value}
                          </Badge>
                        )
                      )}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 py-2">
                  <span className="font-bold">Crystal Structure: </span>
                  <span className="capitalize">
                    {item.spacegroup.crystal_system}
                  </span>
                </CardContent>
                <CardFooter className="w-full justify-end flex p-0">
                  <Button
                    variant="link"
                    onClick={() =>
                      router.push(`/view-detail?id=${item.material_id}`)
                    }
                  >
                    View Detail &rarr;
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
}
