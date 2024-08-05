"use client";

import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";

import Delete from "@/components/custom-ui/delete";
import { naira, fancyDate } from "@/lib/utils";

export const columns: ColumnDef<TProduct>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => (
      <Link
        href={`/dashboard/products/${row.original._id}`}
        className="hover:text-gold"
      >
        {row.original.title}
      </Link>
    ),
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => <p>{row.original.category}</p>,
  },
  {
    accessorKey: "collections",
    header: "Collections",
    cell: ({ row }) => row.original.collections.map((collection) => collection.title).join(", "),
  },
  {
    accessorKey: "price",
    header: "Price ($)",
    cell: ({ row }) => <p>{naira(row.original.price)}</p>,
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => <p>{fancyDate(row.original.createdAt)}</p>,
  },
  {
    id: "actions",
    cell: ({ row }) => <Delete item="menu" id={row.original._id} />,
  },
];