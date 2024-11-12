import Customer from "@/lib/models/Customer";
import Order from "@/lib/models/Order";
import { connectToDB } from "@/lib/mongoDB";

import { NextRequest, NextResponse } from "next/server";
import { format } from "date-fns";

export const POST = async (req: NextRequest) => {
  try {
    await connectToDB();
    const body = await req.json();
    const { firstName, lastName, address, city, state, phone, email, notes, cartItems, customer, total } = body;

    let existingCustomer = await Customer.findOne({ clerkId: customer.clerkId });

    if (!existingCustomer) {
      existingCustomer = new Customer({
        clerkId: customer.clerkId,
        name: customer.name || `${firstName} ${lastName}`,
        email: customer.email || email,
      });
      await existingCustomer.save();
    }

    // Create a new order in the database
    const newOrder = new Order({
      customerClerkId: existingCustomer.clerkId,
      products: cartItems.map((item: any) => ({
        product: item.itemId,
        quantity: item.quantity,
        size: item.size,
      })),
      shippingAddress: {
        street: address,
        phone: phone,
        city: city,
        state: state,
        country: "Nigeria",
        notes: notes,
      },
      totalAmount: total,
      createdAt: new Date(),
    });

    await newOrder.save();

    const orderDetails = {
      _id: newOrder._id,
      customer: existingCustomer.name,
      products: newOrder.products.length,
      totalAmount: newOrder.totalAmount,
      createdAt: format(newOrder.createdAt, "MMM do, yyyy"),
    };

    return NextResponse.json(orderDetails, { status: 201 });
  } catch (err) {
    console.log("[orders_POST]", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};

export const GET = async (req: NextRequest) => {
  try {
    await connectToDB()

    const orders = await Order.find().sort({ createdAt: "desc" })

    const orderDetails = await Promise.all(orders.map(async (order) => {
      const customer = await Customer.findOne({ clerkId: order.customerClerkId })
      return {
        _id: order._id,
        customer: customer.name,
        products: order.products.length,
        totalAmount: order.totalAmount,
        createdAt: format(order.createdAt, "MMM do, yyyy")
      }
    }))

    return NextResponse.json(orderDetails, { status: 200 });
  } catch (err) {
    console.log("[orders_GET]", err)
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export const dynamic = "force-dynamic";