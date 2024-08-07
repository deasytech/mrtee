"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";

import { DataTable } from "@/components/custom-ui/data-table";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Loader from "@/components/custom-ui/loader";
import { columns } from "@/components/dashboard/columns/collection-columns";

const CollectionsList = () => {
  const router = useRouter();

  const [ loading, setLoading ] = useState(true);
  const [ collections, setCollections ] = useState([]);

  const getCollections = async () => {
    try {
      const res = await fetch("/api/collections", {
        method: "GET",
      });
      const data = await res.json();
      setCollections(data);
      setLoading(false);
    } catch (err) {
      console.log("[collection_GET]", err);
    }
  };

  useEffect(() => {
    getCollections();
  }, []);

  return loading ? <Loader /> : (
    <div className="px-10 py-5">
      <div className="flex items-center justify-between">
        <p className="text-heading2-bold">Collections</p>
        <Button className="bg-gold text-white" onClick={() => router.push("/dashboard/collections/new")}>
          <Plus className="h-4 w-4 mr-2" />
          Create Collection
        </Button>
      </div>
      <Separator className="bg-gray-500 my-4" />
      <DataTable columns={columns} data={collections} searchKey="title" />
    </div>
  );
}

export default CollectionsList