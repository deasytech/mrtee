import { NextRequest, NextResponse } from "next/server";

import { connectToDB } from "@/lib/mongoDB";
import ContactMessage from "@/lib/models/ContactMessage";

export const POST = async (req: NextRequest) => {
  try {
    await connectToDB();

    const { name, email, phone, subject, message } = await req.json();

    if (!name || !email || !phone || !subject || !message) {
      return new NextResponse("All fields are required", { status: 400 });
    }

    const newMessage = await ContactMessage.create({
      name,
      email,
      phone,
      subject,
      message,
    });

    await newMessage.save();

    return NextResponse.json(newMessage, { status: 200 });
  } catch (error) {
    console.error("[sendContact_POST]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}