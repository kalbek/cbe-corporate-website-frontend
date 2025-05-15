import { ColumnDef } from '@tanstack/react-table'

export type BranchData = {
  id: string
  branchName: string
  district: string
  branchGrade: string
  region: string
  city: string
  telephone: string
}

export const columns: ColumnDef<BranchData, any>[] = [
  {
    accessorFn: (row: BranchData) => row.branchName,
    header: 'Branch Name',
    cell: ({ row }) => row.original.branchName,
  },
  {
    accessorFn: (row: BranchData) => row.district,
    header: 'District',
    cell: ({ row }) => row.original.district,
  },
  {
    accessorFn: (row: BranchData) => row.branchGrade,
    header: 'Branch Grade',
    cell: ({ row }) => row.original.branchGrade,
  },
  {
    accessorFn: (row: BranchData) => row.region,
    header: 'Region',
    cell: ({ row }) => row.original.region,
  },
  {
    accessorFn: (row: BranchData) => row.city,
    header: 'City',
    cell: ({ row }) => row.original.city,
  },
  {
    accessorFn: (row: BranchData) => row.telephone,
    header: 'Telephone',
    cell: ({ row }) => row.original.telephone,
  },
]
