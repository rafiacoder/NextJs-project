import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { users } from "@/db/schema";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Form body received:", body);

    await db.insert(users).values({
      name: body.firstName + " " + body.lastName,
      email: body.email,
      phone: body.phone,
      project: body.project,
      message: body.message,
    });

    console.log("Data inserted successfully");
    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false, message: "Server error" });
    //         ^ moved inside catch
  }
}