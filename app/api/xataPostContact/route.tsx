import { NextResponse } from "next/server"

import { getXataClient } from "@/lib/xata"

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  const xata = getXataClient()
  try {
    // Parse the request body to get the product details
    const { fullName,num,email,message, } = await req.json()

    const record = await xata.db.Contact.create({
      fullName:fullName,num:num,email:email,message:message,
    })
    return NextResponse.json(record)
  } catch (error) {
    // Handle errors and send an error response
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    )
  }
}
