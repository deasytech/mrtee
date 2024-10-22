import Collection from "@/lib/models/Collection";
import Product from "@/lib/models/Product";
import { connectToDB } from "@/lib/mongoDB";

import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { name: string } }
) => {
  try {
    await connectToDB();

    const product = await Product.find({ category: params.name }).populate({
      path: "collections",
      model: Collection,
    }).lean();

    if (!product) {
      return new NextResponse(
        JSON.stringify({ message: "Product not found" }),
        { status: 404 }
      );
    }

    return new NextResponse(JSON.stringify(product), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": `${process.env.NEXT_PUBLIC_STORE_URL}`,
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (err) {
    console.log("[api_category_GET]", err);
    return new NextResponse("Internal error", { status: 500 });
  }
};

export const dynamic = "force-dynamic";