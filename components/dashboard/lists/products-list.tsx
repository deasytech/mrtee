"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";

import { DataTable } from "@/components/custom-ui/data-table";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Loader from "@/components/custom-ui/loader";
import { columns } from "@/components/dashboard/columns/product-columns";

const ProductList = () => {
  const router = useRouter();

  const [ loading, setLoading ] = useState(true);
  const [ products, setProducts ] = useState([]);

  const getProducts = async () => {
    try {
      const res = await fetch("/api/products", {
        method: "GET",
      });
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      setLoading(false);
      console.log("[product_GET]", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return loading ? <Loader /> : (
    <div className="px-10 py-5">
      <div className="flex items-center justify-between">
        <p className="text-heading2-bold">Product</p>
        <Button className="bg-gold text-white" onClick={() => router.push("/dashboard/products/new")}>
          <Plus className="h-4 w-4 mr-2" />
          Create Product
        </Button>
      </div>
      <Separator className="bg-gray-500 my-4" />
      <DataTable columns={columns} data={products} searchKey="title" />
    </div>
  );
}

export default ProductList