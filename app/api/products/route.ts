import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

import { connectToDB } from "@/lib/mongoDB";
import Product from "@/lib/models/Product";
import Collection from "@/lib/models/Collection";

export const POST = async (req: NextRequest) => {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    await connectToDB();

    const { title, description, media, category, collections, tags, sizes, colors, price } = await req.json();
    if (!title || !description || !media || !category || !price) {
      return new NextResponse("Not enough data to create a product", { status: 400 });
    }

    const newProduct = await Product.create({
      title,
      description,
      media,
      category,
      collections,
      tags,
      sizes,
      colors,
      price,
    });

    await newProduct.save();

    if (collections) {
      for (const collectionId of collections) {
        const collection = await Collection.findById(collectionId);
        if (collection) {
          collection.products.push(newProduct._id);
          await collection.save();
        }
      }
    }

    return NextResponse.json(newProduct, { status: 200 });
  } catch (error) {
    console.error("[products_POST]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export const GET = async (req: NextRequest) => {
  try {
    await connectToDB();
    const url = new URL(req.url);
    const limitParam = url.searchParams.get("limit");
    const limit = limitParam ? parseInt(limitParam, 10) : undefined;

    console.log("Parsed Limit:", limit);

    let query = Product.find().sort({ createdAt: "desc" }).populate({ path: "collections", model: Collection }).lean();

    if (limit) {
      console.log("Applying limit to query:", limit);
      query = query.limit(limit);
    }

    const products = await query.exec();
    console.log("Fetched Products:", products);

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("[products_GET]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};

export const dynamic = "force-dynamic";