import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";

export const PropertiesTable = ({ result }) => {
  return (
    <Card
      className="w-full relative p-4 flex flex-col gap-2"
      style={{ flex: 1 }}
    >
      <CardContent className="p-0 flex">
        <p className="font-bold flex-1">Energy Above Hull</p>
        <p className="flex-1">{result.e_above_hull.toFixed(2)} eV/atom</p>
      </CardContent>
      <Separator />
      <CardContent className="p-0 flex">
        <p className="font-bold flex-1">Space Group</p>
        <p className="flex-1">{result.spacegroup.symbol}</p>
      </CardContent>
      <Separator />
      <CardContent className="p-0 flex">
        <p className="font-bold flex-1">Band Gap</p>
        <p className="flex-1">{result.band_gap.toFixed(2)} eV</p>
      </CardContent>
      <Separator />
      <CardContent className="p-0 flex">
        <p className="font-bold flex-1">Predicted Formation Energy</p>
        <p className="flex-1">
          {result.formation_energy_per_atom.toFixed(2)} eV/atom
        </p>
      </CardContent>
      <Separator />
      <CardContent className="p-0 flex">
        <p className="font-bold flex-1">Total Magnetization</p>
        <p className="flex-1">{result.total_magnetization.toFixed(2)} µB/f.u</p>
      </CardContent>
    </Card>
  );
};
