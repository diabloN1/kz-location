// Handles GET requests to /api/products

import { NextResponse } from "next/server"

import { getXataClient } from "@/lib/xata"

export const dynamic = 'force-dynamic';

export async function GET() {
  const xata = getXataClient()
  try {
    const reviews = await xata.db.Reviews.getAll()
    return NextResponse.json(reviews)
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    )
  }
}
