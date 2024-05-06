import { NextResponse } from "next/server"

import { getXataClient } from "@/lib/xata"

export async function POST(req: Request) {
  const xata = getXataClient()
  try {
    // Parse the request body to get the product details
    const { product, img, user, comment, rate } = await req.json()

    const record = await xata.db.Reviews.create({
      product : product, img: img, user: user, comment: comment, rate:rate,
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
