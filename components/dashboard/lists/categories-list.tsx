"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";

import { DataTable } from "@/components/custom-ui/data-table";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Loader from "@/components/custom-ui/loader";
import { columns } from "@/components/dashboard/columns/collection-columns";

const CategoriesList = () => {
  const router = useRouter();

  const [ loading, setLoading ] = useState(true);
  const [ categories, setCategories ] = useState([]);

  const getCategories = async () => {
    try {
      const res = await fetch("/api/categories", {
        method: "GET",
      });
      const data = await res.json();
      setCategories(data);
      setLoading(false);
    } catch (err) {
      console.log("[category_GET]", err);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return loading ? <Loader /> : (
    <div className="px-10 py-5">
      <div className="flex items-center justify-between">
        <p className="text-heading2-bold">Categories</p>
        <Button className="bg-gold text-white" onClick={() => router.push("/dashboard/categories/new")}>
          <Plus className="h-4 w-4 mr-2" />
          Create Category
        </Button>
      </div>
      <Separator className="bg-gray-500 my-4" />
      <DataTable columns={columns} data={categories} searchKey="title" />
    </div>
  );
}

export default CategoriesList