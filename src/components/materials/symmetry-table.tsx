import { Card, CardContent, CardDescription } from "../ui/card";
import { Separator } from "../ui/separator";

export const SymmetryTable = ({ result }) => {
  return (
    <Card className="w-full relative p-4 my-4 flex flex-col gap-2">
      <CardDescription>Symmetry</CardDescription>
      <CardContent className="p-0 flex">
        <p className="font-bold flex-1">Crystal System</p>
        <p className="flex-1 capitalize">
          {result?.spacegroup?.crystal_system}
        </p>
      </CardContent>
      <Separator />
      <CardContent className="p-0 flex">
        <p className="font-bold flex-1">Lattice System</p>
        <p className="flex-1 capitalize">
          {result?.spacegroup?.crystal_system}
        </p>
      </CardContent>
      <Separator />
      <CardContent className="p-0 flex">
        <p className="font-bold flex-1">Hall Number</p>
        <p className="flex-1">{result?.spacegroup?.hall}</p>
      </CardContent>
      <Separator />
      <CardContent className="p-0 flex">
        <p className="font-bold flex-1">International Number</p>
        <p className="flex-1">{result?.spacegroup?.number}</p>
      </CardContent>
      <Separator />
      <CardContent className="p-0 flex">
        <p className="font-bold flex-1">Symbol</p>
        <p className="flex-1">{result?.spacegroup?.symbol}</p>
      </CardContent>
      <Separator />
      <CardContent className="p-0 flex">
        <p className="font-bold flex-1">Point Group</p>
        <p className="flex-1">{result?.spacegroup?.point_group}</p>
      </CardContent>
    </Card>
  );
};
