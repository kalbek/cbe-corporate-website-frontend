'use client'

import { ColumnDef } from '@tanstack/react-table'

export interface CbeNoorBranchData {
  id: string
  branchName: string
  district: string
  branchGrade: string
  region: string
  city: string
  telephone: string
}

export const columns: ColumnDef<CbeNoorBranchData, any>[] = [
  {
    accessorFn: (row: CbeNoorBranchData) => row.branchName,
    header: 'Branch Name',
    cell: ({ row }) => row.original.branchName,
  },
  {
    accessorFn: (row: CbeNoorBranchData) => row.district,
    header: 'District',
    cell: ({ row }) => row.original.district,
  },
  {
    accessorFn: (row: CbeNoorBranchData) => row.branchGrade,
    header: 'Branch Grade',
    cell: ({ row }) => row.original.branchGrade,
  },
  {
    accessorFn: (row: CbeNoorBranchData) => row.region,
    header: 'Region',
    cell: ({ row }) => row.original.region,
  },
  {
    accessorFn: (row: CbeNoorBranchData) => row.city,
    header: 'City',
    cell: ({ row }) => row.original.city,
  },
  {
    accessorFn: (row: CbeNoorBranchData) => row.telephone,
    header: 'Telephone',
    cell: ({ row }) => row.original.telephone,
  },
]
