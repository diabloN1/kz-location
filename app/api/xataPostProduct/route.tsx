import { NextResponse } from "next/server"

import { getXataClient } from "@/lib/xata"

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  const xata = getXataClient()
  try {
    // Parse the request body to get the product details
    const { nameP, idP, mail, fullName, num, pickupDate, dropoffDate, pickupLoc, dropoffLoc } = await req.json()

    const record = await xata.db.Demande_P.create({
      nameP : nameP, idP: idP, email: mail, fullName: fullName, num: num, pickupDate: pickupDate, dropoffDate: dropoffDate, pickupLoc: pickupLoc, dropoffLoc: dropoffLoc,
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
