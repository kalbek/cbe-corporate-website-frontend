'use client';

import { ColumnDef } from "@tanstack/react-table";

export interface CbeBirrAgentData {
  id: string;
  branchName: string;
  district: string;
  branchGrade: string;
  region: string;
  city: string;
  telephone: string;
}

export const columns: ColumnDef<CbeBirrAgentData, any>[] = [
  {
    accessorFn: (row: CbeBirrAgentData) => row.branchName,
    header: "Branch Name",
    cell: ({ row }) => row.original.branchName,
  },
  {
    accessorFn: (row: CbeBirrAgentData) => row.district,
    header: "District",
    cell: ({ row }) => row.original.district,
  },
  {
    accessorFn: (row: CbeBirrAgentData) => row.branchGrade,
    header: "Branch Grade",
    cell: ({ row }) => row.original.branchGrade,
  },
  {
    accessorFn: (row: CbeBirrAgentData) => row.region,
    header: "Region",
    cell: ({ row }) => row.original.region,
  },
  {
    accessorFn: (row: CbeBirrAgentData) => row.city,
    header: "City",
    cell: ({ row }) => row.original.city,
  },
  {
    accessorFn: (row: CbeBirrAgentData) => row.telephone,
    header: "Telephone",
    cell: ({ row }) => row.original.telephone,
  },
];
