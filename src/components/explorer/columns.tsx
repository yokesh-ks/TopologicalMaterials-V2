"use client";

import { DataTableColumnHeader } from "./data-table-column-header";

export const columns = [
  {
    accessorKey: "full_formula",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="FullForumla" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("full_formula")}</div>
    ),
    enableHiding: false,
  },
  {
    accessorKey: "energy_per_atom",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Energy Per Atom" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">
        {row.getValue("energy_per_atom").toFixed(2)}
      </div>
    ),
  },
  {
    accessorKey: "e_above_hull",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Energy Above Hull" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("e_above_hull").toFixed(2)}</div>
    ),
  },
  {
    accessorKey: "spacegroup",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Space Group" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("spacegroup").symbol}</div>
    ),
  },
  {
    accessorKey: "band_gap",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Band Gap" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("band_gap").toFixed(2)}</div>
    ),
  },
  {
    accessorKey: "formation_energy_per_atom",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Predicted Formation Energy"
      />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">
        {row.getValue("formation_energy_per_atom").toFixed(2)}
      </div>
    ),
  },
  {
    accessorKey: "total_magnetization",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Total Magnetization" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">
        {row.getValue("total_magnetization").toFixed(2)}
      </div>
    ),
  },
];
