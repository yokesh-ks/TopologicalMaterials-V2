import { Card, CardContent, CardDescription } from "../ui/card";
import { Separator } from "../ui/separator";

function getValueByTypeAndInput(data, type, input) {
  const lines = data.split("\n");
  let key;
  if (input) {
    key = `_cell_${type}_${input}`;
  } else {
    key = `_cell_${type}`;
  }
  for (const line of lines) {
    const [keyValuePair] = line.trim().split(/\s+/);
    if (keyValuePair === key) {
      const [, value] = line.trim().split(/\s+/);

      const parsedValue = parseFloat(value);

      if (!isNaN(parsedValue)) {
        const roundedValue = parsedValue.toFixed(2);
        return roundedValue; // This will print "5.51"
      } else {
        return null;
      }
    }
  }

  return null; // Return null if the key is not found
}

const metaData = [
  {
    displayTitle: "a",
    type: "length",
    input: "a",
    symbol: "Å",
  },
  {
    displayTitle: "b",
    type: "length",
    input: "b",
    symbol: "Å",
  },
  {
    displayTitle: "c",
    type: "length",
    input: "c",
    symbol: "Å",
  },
  {
    displayTitle: "alpha",
    type: "angle",
    input: "alpha",
    symbol: "º",
  },
  {
    displayTitle: "beta",
    type: "angle",
    input: "beta",
    symbol: "º",
  },
  {
    displayTitle: "gamma",
    type: "angle",
    input: "gamma",
    symbol: "º",
  },
  {
    displayTitle: "volume",
    type: "volume",
    input: "",
    symbol: "Å³",
  },
];

export const LatticeTable = ({ result }) => {
  return (
    <Card className="w-full relative p-4 my-4 flex flex-col gap-2">
      <CardDescription>Lattice (Primitive)</CardDescription>
      {metaData.map((item, index) => (
        <>
          <CardContent className="p-0 flex" key={index}>
            <p className="font-bold" style={{ flex: 1 }}>
              {item.displayTitle}{" "}
            </p>
            <p style={{ flex: 1 }}>
              {getValueByTypeAndInput(result?.cif, item.type, item.input)}{" "}
              {item.symbol}
            </p>
          </CardContent>
          {metaData.length !== index + 1 ? <Separator /> : null}
        </>
      ))}
    </Card>
  );
};
