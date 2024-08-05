"use client";

import { naira } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export const columns: ColumnDef<TOrderColumn>[] = [
  {
    accessorKey: "_id",
    header: "Order",
    cell: ({ row }) => {
      return (
        <Link
          href={`/dashboard/orders/${row.original._id}`}
          className="hover:text-gold"
        >
          {row.original._id}
        </Link>
      );
    },
  },
  {
    accessorKey: "customer",
    header: "Customer",
  },
  {
    accessorKey: "products",
    header: "Products",
  },
  {
    accessorKey: "totalAmount",
    header: "Total (₦)",
    cell: ({ row }) => <p>{naira(row.original.totalAmount)}</p>,
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
  },
];