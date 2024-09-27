import { NextResponse } from "next/server"

import { getXataClient } from "@/lib/xata"

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  const xata = getXataClient()
  try {
    // Parse the request body to get the product details
    const { serviceType, name, email, subject, Description, num } = await req.json()

    
    const record = await xata.db.Demande_S.create({
      serviceType: serviceType,
      name: name,
      email: email,
      subject: subject,
      Description: Description,
      num: num,
    })
    // Request an uploadUrl from the created record. We'll use this client-side to update the record.

    // Return the `uploadUrl` in the API response
    // Send a success response
    return NextResponse.json(record)
  } catch (error) {
    // Handle errors and send an error response
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    )
  }
}
