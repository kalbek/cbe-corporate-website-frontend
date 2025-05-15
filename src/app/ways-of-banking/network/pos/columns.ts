import { ColumnDef } from '@tanstack/react-table'

export interface PosData {
  id: string
  branchName: string
  district: string
  branchGrade: string
  region: string
  city: string
  telephone: string
}

export const columns: ColumnDef<PosData, any>[] = [
  {
    accessorFn: (row: PosData) => row.branchName,
    header: 'Branch Name',
    cell: ({ row }) => row.original.branchName,
  },
  {
    accessorFn: (row: PosData) => row.district,
    header: 'District',
    cell: ({ row }) => row.original.district,
  },
  {
    accessorFn: (row: PosData) => row.branchGrade,
    header: 'Branch Grade',
    cell: ({ row }) => row.original.branchGrade,
  },
  {
    accessorFn: (row: PosData) => row.region,
    header: 'Region',
    cell: ({ row }) => row.original.region,
  },
  {
    accessorFn: (row: PosData) => row.city,
    header: 'City',
    cell: ({ row }) => row.original.city,
  },
  {
    accessorFn: (row: PosData) => row.telephone,
    header: 'Telephone',
    cell: ({ row }) => row.original.telephone,
  },
]
